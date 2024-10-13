import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import { useNavigate } from "react-router-dom";



function Signup() {       
    
    const [isregistered,setisregistered]= useState(true);
    const [userDetails, setuserDetails]= useState({smail:"",spassword:""})
    const navigate = useNavigate();
    
    function newDetails(e) {
        const { name, value } = e.target;
        setuserDetails((oldValue) => ({
          ...oldValue,
          [name]: value,  
        }));
      }
    function toggleForm(e) {
        e.preventDefault()
        setisregistered(!isregistered)       
    }   
    function onSignin(e){
        e.preventDefault();  
        if(isregistered){
            navigate('/moviepage')
        }else{
            navigate('/signup')
        }
    }

      
    useEffect(() => {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }, []);
    

   return<div>
        <div className="home">
            <div>
            <form onSubmit={onSignin} action='POST'>
                <div className="container">
                    <p className="text-center h1 mt-3" style={{color:"#9dddbd"}}>{isregistered?"Sign In":"Sign Up"}</p>
                <div className="card mt-5">
                    <Input p="Enter Email Address" n="smail" ty="email" o={newDetails} value={userDetails.smail} />
                    <Input p="Enter Password" n="spassword"  ty="password" o={newDetails} value={userDetails.spassword} />
                    {!isregistered && <Input p="Re-enter password" n="su-password"  ty="password"/>}
                    <div className="d-grid  mx-auto">
                    <Button oc={onSignin} className='btn fs-5 fw-semibold btn-success grow mt-3 cb' t={isregistered?"Sign In":"Get Started"} ty="submit"  />
                    <div className="mt-2">
                    {!isregistered?<p>Already a member? <a href="https://facebook.com/" onClick={toggleForm} className="grow">Click Here</a></p>:<p className="mt-2">Create new account . <a href="#" onClick={toggleForm} className="grow">Click Here</a></p> }
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