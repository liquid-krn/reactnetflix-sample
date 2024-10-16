import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import { useNavigate } from "react-router-dom";



function Signup() {       
    
    const [isregistered,setisregistered]= useState(true);
    const [userDetails, setuserDetails]= useState({smail:"",spassword:"",repassword:''})
    const navigate = useNavigate();
    
    function newDetails(e) {
        const { name, value } = e.target;
        setuserDetails((oldValue) => ({
          ...oldValue,
          [name]: value,  
        }));
      }
    function onSignin(e){
        e.preventDefault();  
        if (userDetails.spassword !== userDetails.repassword) {
            alert("Passwords do not match!");
            return; 
        }

        console.log(userDetails);
        const requestBody = {
            email: userDetails.smail,
            password: userDetails.spassword,
            repassword: userDetails.repassword
        };
        fetch(`http://localhost:3001/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }, 
            body: JSON.stringify(requestBody)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data === "success"){
                navigate('/moviepage')
            }else{
                alert('invalid credentials')   
            }
        }) 
                
    }
    function handleclick(){
        navigate('/signin');
    }
      
   return<div>
        <div className="home">
            <div>
            <form onSubmit={onSignin}>
                <div className="container">
                    <p className="text-center h1 mt-3" style={{color:"#9dddbd"}}>Register</p>
                <div className="card mt-5">
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