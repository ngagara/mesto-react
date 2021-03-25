import React from "react";

import PopupWidthForm from './PopupWithForm'

function AddCardPopup({ isOpen, onClose, onAddPlace }) {

    const inputNameRef = React.useRef('');
    const inputLinkRef = React.useRef('');
    
    function handleSubmit(e) {
      e.preventDefault();
  
      onAddPlace({
        name: inputNameRef.current.value,
        link: inputLinkRef.current.value
      });
    } 

  return (
    <PopupWidthForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name={'add-card'} title={'Новое место'}>
      <input ref={inputNameRef} id="name" type="text" minLength="2" maxLength="30" className="popup__input popup__input_type_edit-info" placeholder="Название" required/>
      <span id="name-error" className="error"></span>
      <input ref={inputLinkRef} id="link" type="url" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required/>
      <span id="link-error" className="error"></span>
    </PopupWidthForm>
  );
}

export default AddCardPopup;