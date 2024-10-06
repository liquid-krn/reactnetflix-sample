import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css"

function Signup() {       
    
    const [isregistered,setisregistered]= useState(false);
    
    function handleclick(e) {
        e.preventDefault()
        setisregistered((prevValue)=>{
                return !prevValue;
        })   
        
    }

   
   return<div>
        <div className="home">
            <div>
            <form>
                <div className="container">
                    <p className="text-center h1 mt-4" style={{color:"#B98989"}}>{isregistered?"Login":"Sign Up "}</p>
                <div className="card mt-5">
                    <Input p="Enter Email Address" n="s-mail" ty="email" />
                    <Input p="Enter Password" n="s-password"  ty="password"/>
                    <div className="d-grid  mx-auto">
                    <Button className='btn fs-5 fw-semibold btn-success grow mt-3 cb' t={isregistered?"Login":"Get Started"} ty="submit" oc={handleclick} />
                    </div>
                  
                </div>
                </div>
                
            </form>
            </div>
        </div>
    </div>
}
export default Signup