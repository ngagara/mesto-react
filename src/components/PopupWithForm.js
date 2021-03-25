import React from 'react';
import closeImage from '../images/close.svg'

function PopupWidthForm({title, name, children, isOpen, onClose, onSubmit}) {

  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content">
        <img src={closeImage} alt="Close button" className="popup__close" onClick={onClose}/>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" name={name} onSubmit={onSubmit}>
           {children}
           <button type="submit" className="button popup__button popup__button_activ">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWidthForm;