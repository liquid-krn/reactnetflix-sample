import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css"

function Signup() {       
    
    const [isregistered,setisregistered]= useState(false);
    
    function handleclick(e) {
        e.preventDefault()
        setisregistered(!isregistered)       
    }   
   return<div>
        <div className="home">
            <div>
            <form>
                <div className="container">
                    <p className="text-center h1 mt-3" style={{color:"#9dddbd"}}>{isregistered?"Sign Up":"Sign In "}</p>
                <div className="card mt-5">
                    <Input p="Enter Email Address" n="s-mail" ty="email" />
                    <Input p="Enter Password" n="s-password"  ty="password"/>
                    {isregistered && <Input p="Re-enter password" n="su-password"  ty="password"/>}
                    <div className="d-grid  mx-auto">
                    <Button className='btn fs-5 fw-semibold btn-success grow mt-3 cb' t={isregistered?"Get Started":"Sign In"} ty="submit"  />
                    <div className="mt-2">
                    {isregistered?<p>Already a member? <a href="https://facebook.com/" onClick={handleclick}>Click Here</a></p>:<p>Create new account . <a href="#" onClick={handleclick}>Click Here</a></p> }
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