import React from "react";

import Card from './Card'

import { Context } from '../contexts/CurrentUserContext'

function Main({onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDel}) {

  const mainContext = React.useContext(Context);
  
  const cards = mainContext.isCards;
  const userContext = mainContext.isCurrentUser;
  
  return (
    <main className="content page__content">
       <section className="profile root__section">
      <div className="user-info">
        <img className="user-info__photo" src={userContext.avatar}/>
        <div className="user-info__data">
          <h1 className="user-info__name">{userContext.name}</h1>
          <p className="user-info__job">{userContext.about}</p>
          <button className="button button__open-edit" onClick={onEditProfile}>Edit</button>
        </div>
        <button className="button button_open-add user-info__button" onClick={onAddPlace}>+</button>
      </div>
    </section>
    <section className="places-list root__section">    
    {cards && cards.map((item, index) => (<Card key={index} card={item} onCardDel={onCardDel} onCardLike={onCardLike} onCardClick={onCardClick} link={item.link} name={item.name} />))}
    </section>

    </main>
  );
}

export default Main;