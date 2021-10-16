import React from "react";
import "./Card.css";
const Cards = ({ item }) => {
  // console.log(item);
  return (
    <div className="card">
        <img src={item?.img} alt='info' />
        <div className="card-info">
            <p>{item?.name}</p>
            <p>{item?.nickname}</p>
        </div>
    </div>
  )
}
export default Cards;

