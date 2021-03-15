import React from "react";

function Card({name, link, card}) {
  return (
    <div className="place-card">
    <div className="place-card__image" style={{ backgroundImage: `url(${link})`}} onClick={()=>card(link)}>
      <button className="place-card__delete-icon"></button>
    </div>
    <div className="place-card__description">
      <h3 className="place-card__name">{name}</h3>
      <button className="place-card__like-icon"></button>
    </div>
 </div> 
  );
}

export default Card;