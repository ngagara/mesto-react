import React, { useState, useEffect } from "react";

import PopupWidthForm from './PopupWithForm'

import { Context } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const mainContext = React.useContext(Context);
  const userContext = mainContext.isCurrentUser;

    const [isName, setName] = useState('');
    const [isDescription, setDescription] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          isName,
          isDescription,
        });
      }
    
     useEffect(() => {
        setName(userContext.name);
        setDescription(userContext.about);
      }, [userContext]);

  return (
    <PopupWidthForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name={'edit-info'} title={'Редактировать профиль'} >
      <input id="user-name" type="text" minLength="2" maxLength="30" className="popup__input" placeholder="Имя" required
      value={isName || ''}
      onChange={handleChangeName}
      />
      <span id="user-name-error" className="error"></span>
      <input id="user-info" type="text" minLength="2" maxLength="30"className="popup__input" placeholder="О себе" required
      value={isDescription || ''}
      onChange={handleChangeDescription}
      />
      <span id="user-info-error" className="error"></span>
    </PopupWidthForm>
  );
}

export default EditProfilePopup;