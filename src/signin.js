import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import { useNavigate } from "react-router-dom";

function Signin() {       
    const [userDetails, setUserDetails] = useState({ smail: "", spassword: "" });
    const [status, setStatus] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [buttonClass, setButtonClass] = useState("btn fs-5 fw-semibold btn-success mt-3 cb");
    const navigate = useNavigate();
    
    function newDetails(e) {
        const { name, value } = e.target;
        setUserDetails((oldValue) => ({
          ...oldValue,
          [name]: value,  
        }));
    }

    useEffect(() => {
        const { smail, spassword } = userDetails;
        const isFormValid = smail.includes("@") && smail.includes(".") && spassword.length >= 6;
        
        setIsButtonDisabled(!isFormValid);
        setButtonClass(isFormValid ? "btn fs-5 fw-semibold btn-success grow mt-3 cb" : "btn fs-5 fw-semibold btn-success mt-3 cb");
    }, [userDetails]);

    function onSignin(e) {
        e.preventDefault();
        setStatus(""); 
        const { smail, spassword } = userDetails;

        if (spassword.length < 6) {
            setStatus("Password character below 6");
            return;
        }

        if (!smail.includes("@") || !smail.includes(".")) {
            setStatus("Inputted value not an email");
            return;
        }

        if (!smail || !spassword) {
            setStatus("Empty input space. Kindly fill all fields.");
            return;
        }

        const requestBody = {
            email: smail,
            password: spassword, 
        };

        fetch("https://server-rtzj.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(requestBody)
        })
        .then(res => res.json())
        .then(data => {
            if (data === "success") {
                navigate("/moviepage");
            } else {
                setStatus("Wrong information inputted, kindly refill");
            }
        })
        .catch(() => setStatus("An error occurred. Please try again."));
    }

    function handleClick(e) {
        e.preventDefault();
        navigate("/signup");
    }

    return (
        <div>
            <div className="home">
                <div>
                    <form onSubmit={onSignin}>
                        <div className="container">
                            <p className="text-center h1 mt-3" style={{ color: "#9dddbd" }}>Sign In</p>
                            <div className="card mt-5">
                                <p>{status}</p>
                                <Input p="Enter Email Address" n="smail" ty="email" o={newDetails} value={userDetails.smail} />
                                <Input p="Enter Password" n="spassword" ty="password" o={newDetails} value={userDetails.spassword} />
                                <div className="d-grid mx-auto">
                                    <Button 
                                        disabled={isButtonDisabled} 
                                        className={buttonClass} 
                                        t="Sign-In" 
                                        ty="submit" 
                                    />
                                    <div className="mt-2">
                                        <p>Become a member? <a href="#" onClick={handleClick} className="grow">Click Here</a></p>
                                    </div>
                                </div>       
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin;
