import React from "react";
import './input.css'

function Input(props) {
    return<div>
        <input className="mb-2 rounded border-2 mx-auto" onChange={props.o} placeholder={props.p} name={props.n} type={props.ty} value={props.v} />
    </div>
}
export default Input