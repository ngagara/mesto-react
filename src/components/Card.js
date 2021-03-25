import React from "react";

import { Context } from '../contexts/CurrentUserContext'

function Card({name, link, card, onCardClick, onCardLike, onCardDel}) {

  const mainContext = React.useContext(Context);
  
  const userContext = mainContext.isCurrentUser;

  const isOwn = card.owner._id === userContext._id; 

  const isLiked = card.likes.some(i => i._id === userContext._id);

  const cardLikeButtonClassName = (`place-card__like-icon  ${isLiked ? 'place-card__like-icon_liked' : ''}`); 

  const cardDeleteButtonClassName = (
  `place-card__delete-icon ${isOwn ? 'place-card__delete-icon_visible' : 'place-card__delete-icon_hidden'}`
   ); 

  return (
    <div className="place-card">
    <div className="place-card__image" style={{ backgroundImage: `url(${link})`}} onClick={()=>onCardClick(link)}>
      <button className={cardDeleteButtonClassName} onClick={()=>onCardDel(card)}></button>
    </div>
    <div className="place-card__description">
      <h3 className="place-card__name">{name}</h3>
      <div className="place-card__item-container">
      <button className={cardLikeButtonClassName} onClick={()=>onCardLike(card)}></button>
      <p className="place-card__counter">{card.likes.length}</p>
      </div>
    </div>
 </div> 
  );
}

export default Card;