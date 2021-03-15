import React, { useState, useEffect } from "react";

import api from '../utils/api'

import Card from './Card'

function Main({onEditProfile, onAddPlace, card}) {
  
  let [userName, setUserName] = useState('');
  let [userDescription, setUserDescription] = useState('');
  let [userAvatar, setUserAvatar] = useState('');
  let [isCards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    }).catch((err) => {
      console.log(err);
    });
  
    api.getInitialCards().then((res) => {
      setCards(res)
    }).catch((err) => {
      console.log(err);
    });
 },[]);

  return (
    <main className="content page__content">
       <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo" style={{ backgroundImage: `url(${userAvatar})`}}></div>
        <div className="user-info__data">
          <h1 className="user-info__name">{userName}</h1>
          <p className="user-info__job">{userDescription}</p>
          <button className="button button_open-edit" onClick={onEditProfile}>Edit</button>
        </div>
        <button className="button button_open-add user-info__button" onClick={onAddPlace}>+</button>
      </div>
    </div>
    <div className="places-list root__section">    
    {
    isCards.map((item, index) => (<Card key={index} card={card} link={item.link} name={item.name} />))
    } 
    </div>

    </main>
  );
}

export default Main;