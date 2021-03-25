import React, { useState, useEffect } from "react";

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWidthForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import ImagePopup from './ImagePopup'
import AddCardPopup from './AddCardPopup'

import {Context} from '../contexts/CurrentUserContext'

import api from '../utils/api'

function App() {

  const [isCurrentUser, setCurrentUser] = useState({});
  const [isCards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isSelectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res)
    }).catch((err) => {
      console.log(err);
    });

    api.getInitialCards().then((res) => {
      setCards(res)
    }).catch((err) => {
      console.log(err);
    });
 },[]);

 let handleCardLike = (card) => {

  const isLiked = card.likes.some(i => i._id === isCurrentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = isCards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);

    });
 }

  let handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() => {
        const newArrCards = isCards.filter(element => element !== card);
        setCards(newArrCards);
      }).catch((err) => console.log(err));
  }

  let handleAddPlaceSubmit = (card) => {
    api.postCard(card.name, card.link).then((card) => {
      setCards([...isCards, card]);
      closePopup();
    })
    .catch((err) => console.log(err));
  }

  let handleUpdateUser = (info) => {
    api.updateUserInfo(info.isName, info.isDescription).then((info) => {
        setCurrentUser(info);
        closePopup();
      })
      .catch((err) => console.log(err));
  }

  let handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  let handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true)
  }

  let handleCardClick = (link) =>{
    setImagePopupOpen(true)
    setSelectedCard(link)
  }
  
  let closePopup = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false)
  }

  return (
  <Context.Provider value={{isCurrentUser, isCards}}>
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardDel={(card)=>{handleCardDelete(card)}} onCardLike={(card)=>{handleCardLike(card)}} onCardClick={(link) => {handleCardClick(link)}}/>
    <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closePopup} onAddPlace={handleAddPlaceSubmit}/>
    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopup} onUpdateUser={handleUpdateUser}/>
    <ImagePopup isSelectedCard={isSelectedCard} onClose={closePopup} isOpen={isImagePopupOpen}/>
    <Footer/>
  </Context.Provider>
  );
}

export default App;