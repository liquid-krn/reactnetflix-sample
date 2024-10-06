import React from "react";

function Button(props) {
    return<div>
        <button className={props.className} onClick={props.oc} type={props.ty}>{props.t}</button>
    </div>
}

export default Button