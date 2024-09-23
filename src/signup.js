import React from "react";
import Input from "./input";
import Button from "./button";
import "./card.css"

function Signup() {
    return<div>
        <div className="home">
            <div>
            <form>
                <div className="container ">
                <div className="card mt-4">
                    <Input p="Enter Email Address" n="smail" ty="email" />
                    <Input p="Enter Password" n="s-password"  ty="password"/>
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <Button className='btn btn-success grow mt-3 ' t="Signup" ty="submit" />
                    </div>
                  
                </div>
                </div>
                
            </form>
            </div>
        </div>
    </div>
}
export default Signup