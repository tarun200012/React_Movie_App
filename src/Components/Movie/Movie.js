import React from "react";

export default function(props){
    return (
        <div className="movie">
        {/* {console.log("props-->",props)} */}

            <h2>{props.title}</h2>
            <img src={props.image} />
            <h3>{props.year}</h3>
        </div>
    );
    
}