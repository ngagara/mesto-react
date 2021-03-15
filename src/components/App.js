import React, { useState } from "react";

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import PopupWidthForm from './PopupWithForm'
import ImagePopup from './ImagePopup'

function App() {
  
  let [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  let [isImagePopupOpen, setImagePopupOpen] = useState(false);

  let [isSelectedCard, setSelectedCard] = useState('');

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
  <>
    <Header/>
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} card={handleCardClick}/>
    <PopupWidthForm isOpen={isAddPlacePopupOpen} onClose={closePopup} name={'add-card'} title={'Новое место'}>
      <input id="name" type="text" minLength="2" maxLength="30" className="popup__input popup__input_type_edit-info" placeholder="Название" required/>
      <span id="name-error" className="error"></span>
      <input id="link" type="url" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required/>
      <span id="link-error" className="error"></span>
    </PopupWidthForm>
    <PopupWidthForm isOpen={isEditProfilePopupOpen} onClose={closePopup} name={'edit-info'} title={'Редактировать профиль'}>
      <input id="user-name" type="text" minLength="2" maxLength="30" className="popup__input" placeholder="Имя" required/>
      <span id="user-name-error" className="error"></span>
      <input id="user-info" type="text" minLength="2" maxLength="30"className="popup__input" placeholder="О себе" required/>
      <span id="user-info-error" className="error"></span>
    </PopupWidthForm>
    <ImagePopup isSelectedCard={isSelectedCard} onClose={closePopup} isOpen={isImagePopupOpen}/>
    <Footer/>
  </>
  );
}

export default App;
