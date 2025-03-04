import React from "react";

function Card({ title, description, link, id}) {
    return (
      <div className="card" id={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className="button">Learn More</a>
      </div>
    )
  }
  
  export default Card;