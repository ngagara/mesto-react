import React from 'react';
import closeImage from '../images/close.svg'

function ImagePopup() {
  return (
    <div className="popup popup_image">
      <div className="popup__conteiner">
        <img className="popup__picture"/>
        <img src={closeImage} alt="" className="popup__close"/>
      </div>
    </div>
  );
}


export default ImagePopup;