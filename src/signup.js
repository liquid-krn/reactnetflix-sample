import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    smail: "",
    spassword: "",
    repassword: ""
  });
  const [status, setStatus] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonClass, setButtonClass] = useState("btn fs-5 fw-semibold btn-success mt-3 cb");
  const navigate = useNavigate();

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function newDetails(e) {
    const { name, value } = e.target;
    setUserDetails((oldValue) => ({
      ...oldValue,
      [name]: value
    }));
  }

  useEffect(() => {
    const { smail, spassword, repassword } = userDetails;

    if (!isValidEmail(smail)) {
      setIsButtonDisabled(true);
      setButtonClass("btn fs-5 fw-semibold btn-success mt-3 cb"); // Remove "grow" class
      return;
    }

    if (spassword.length < 6) {
      setIsButtonDisabled(true);
      setButtonClass("btn fs-5 fw-semibold btn-success mt-3 cb"); // Remove "grow" class
      return;
    }

    if (spassword !== repassword) {
      setIsButtonDisabled(true);
      setButtonClass("btn fs-5 fw-semibold btn-success mt-3 cb"); // Remove "grow" class
      return;
    }

    setIsButtonDisabled(false);
    setButtonClass("btn fs-5 fw-semibold btn-success grow mt-3 cb");

  }, [userDetails]);

  function onSignin(e) {
    e.preventDefault();
    const { smail, spassword, repassword } = userDetails;

    if (!isValidEmail(smail)) {
      setStatus("Email format invalid.");
      return;
    }
    if (spassword.length < 6) {
      setStatus("Password must be at least 6 characters.");
      return;
    }
    if (spassword !== repassword) {
      setStatus("Passwords do not match!");
      return;
    }

    const requestBody = {
      email: smail,
      password: spassword,
      repassword: repassword
    };

    fetch("https://server-rtzj.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "Signup success") {
          navigate("/moviepage");
        } else {
          setStatus(data);
        }
      });
  }

  function handleclick() {
    navigate("/signin");
  }

  return (
    <div>
      <div className="home">
        <div>
          <form onSubmit={onSignin}>
            <div className="containerr">
              <p className="text-center h1 mt-3" style={{ color: "#9dddbd" }}>Register</p>
              <div className="card mt-5">
                <p>{status}</p>
                <Input p="Enter Email Address" n="smail" ty="email" o={newDetails} value={userDetails.smail} />
                <Input p="Enter Password" n="spassword" ty="password" o={newDetails} value={userDetails.spassword} />
                <Input p="Re-enter password" n="repassword" ty="password" o={newDetails} value={userDetails.repassword} />
                <div className="d-grid mx-auto">
                  <Button
                    disabled={isButtonDisabled}
                    className={buttonClass}
                    t="Get Started"
                    ty="submit"
                  />
                  <div className="mt-2">
                    <p>Already a member? <span onClick={handleclick} className="grow" style={{ cursor: "pointer" }}>Click Here</span></p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
