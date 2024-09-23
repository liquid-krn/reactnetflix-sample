import React from "react";

function IMG(props) {
    return<div>
         <img src={props.s} class={props.c} alt={props.alt}></img>
    </div>
}
export default IMG;