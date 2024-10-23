import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isRegistered, setIsRegistered] = useState(true);
  const [userDetails, setUserDetails] = useState({
    smail: "",
    spassword: "",
    repassword: ""
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  function newDetails(e) {
    const { name, value } = e.target;
    setUserDetails((oldValue) => ({
      ...oldValue,
      [name]: value
    }));
  }

  function onSignin(e) {
    e.preventDefault();
    const { smail, spassword, repassword } = userDetails;
    if (!smail.includes('@') || !smail.includes('.')) {
      setStatus("Inputted value not an email");
      return;
    }
    if (!smail || !spassword || !repassword) {
      setStatus("Empty input space. Kindly fill all fields.");
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
    function handleclick(){
        navigate('/signin');
    }
      
   return<div>
        <div className="home">
            <div>
            <form onSubmit={onSignin}>
                <div className="containerr">
                    <p className="text-center h1 mt-3" style={{color:"#9dddbd"}}>Register</p>
                <div className="card mt-5">
                    <p>{status}</p>
                    <Input p="Enter Email Address" n="smail" ty="email" o={newDetails} value={userDetails.smail} />
                    <Input p="Enter Password" n="spassword"  ty="password" o={newDetails} value={userDetails.spassword} />
                    <Input p="Re-enter password" o={newDetails} n="repassword"  ty="password"/>
                    <div className="d-grid  mx-auto">
                    <Button oc={onSignin} className='btn fs-5 fw-semibold btn-success grow mt-3 cb' t={'Get Started'} ty="submit"  />
                    <div className="mt-2">
                    <p>Already a member? <a onClick={handleclick} href="#"  className="grow">Click Here</a></p>
                    </div>
                    </div>       
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
}
export default Signup