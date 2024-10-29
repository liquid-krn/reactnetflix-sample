import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return <div className="absolute bottom-0 ">
        <p>Copyright © {year}</p>
    </div>
}
export default Footer