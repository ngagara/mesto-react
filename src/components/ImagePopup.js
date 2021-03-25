import React from 'react';
import closeImage from '../images/close.svg'

function ImagePopup({isSelectedCard, onClose, isOpen}) {
  return (
    <div className={`popup popup_image ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__conteiner">
        <img className="popup__picture" src={isSelectedCard}/>
        <img src={closeImage} alt="" className="popup__close" onClick={onClose}/>
      </div>
    </div>
  );
}


export default ImagePopup;