import React, { useState, useEffect } from "react";
import Input from "./input";
import Button from "./button";
import "./card.css";
import { useNavigate} from "react-router-dom";


function Signin() {       
    
    const [isregistered,setisregistered]= useState(true);
    const [userDetails, setuserDetails]= useState({smail:"",spassword:""})
    const [status, setstatus] = useState('')
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
        const { smail, spassword} = userDetails;
        if (!smail.includes('@') || !smail.includes('.')) {
            setstatus("Inputted value not an email");
            return;
          }
  
        if (!smail || !spassword) {
          setstatus("Empty input space. Kindly fill all fields.");
          return;
        }
    
        console.log(userDetails);
        const requestBody = {
            email: userDetails.smail,
            password: userDetails.spassword, 
        };
        fetch(`https://server-rtzj.onrender.com/signin`, {
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
                setstatus('wrong infromation inputted kindly refill') 
            }
        }) 
            
    }
      
    function handleclick(e){
        e.preventDefault()
        navigate('/signup');
    }
   return<div>
        <div className="home">
            <div>
            <form onSubmit={onSignin}>
                <div className="container">
                    <p className="text-center h1 mt-3" style={{color:"#9dddbd"}}>Sign In</p>
                <div className="card mt-5">
                <p className="">{status}</p>
                    <Input p="Enter Email Address" n="smail" ty="email" o={newDetails} value={userDetails.smail} />
                    <Input p="Enter Password" n="spassword"  ty="password" o={newDetails} value={userDetails.spassword} />
                     <div className="d-grid  mx-auto">
                    <Button oc={onSignin} className='btn fs-5 fw-semibold btn-success grow mt-3 cb' t={'Sign-In'} ty="submit"  />
                    <div className="mt-2">
                    <p>Become a member? <a href="#" onClick={handleclick} className="grow">Click Here</a></p>
                    </div>
                    </div>       
                </div>
                </div>
            </form>
            </div>
        </div>
    </div>
}
export default Signin