import React from "react";

function Card({ data }) {
  return (
    <div className="card">
      <h2>{data.id}</h2>
      <p>name: {data.name}</p>
      <p>class: {data.className}</p> 
    </div>
  );
}

export default Card;