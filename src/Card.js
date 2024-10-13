import React from "react";
import IMG from "./img"; 
import './card.css';

function Card(props) {
    return (
        <div>
            <div className="card" >
                <IMG />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href={props.link} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
