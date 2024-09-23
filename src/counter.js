import React, { useState } from "react";
import Input from "./input";


function Counter() {
    const [number,setNumber] = useState(0);
    const [fullname,setfullname]= useState({firstname:'',lastname:''});

    function increaseCounter() {
         setNumber(number +1);
        }

    function detectchange(e) {        
        var {name,value} = e.target;
        setfullname((prev)=>{
            if(name==='firstname'){
                return {firstname:value,lastname:prev.lastname}
            }else if(name==='lastname'){
                return {firstname:prev.firstname,lastname:value}
            }
        })
        
    }
    return<div>
            <div className="container">
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded card mx-auto p-2 d-flex align-items-center" style={{width:"50%",}}>
                    <div className="card-body">
                        <h1 className="text-center mx-auto">{fullname.firstname} {fullname.lastname}</h1>
                        <h3 className="mx-auto text-center" >Community:{number}</h3><br/>
                        <Input n='firstname' p='input first-name here' o={detectchange} v={fullname.firstname} />
                        <Input n='lastname' p='input last-name here' o={detectchange} v={fullname.lastname} />
                        <button className="btn btn-primary btn-lg d-grid gap-2 col-8 mx-auto" onClick={increaseCounter}>Sign up</button>
                    </div>
                </div>
            </div>
           
         </div>
}
export default Counter