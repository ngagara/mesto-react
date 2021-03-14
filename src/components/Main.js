import React from 'react';

function Main({onEditProfile, onAddPlace}) {
  
  return (
    <main className="content page__content">
       <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name"></h1>
          <p className="user-info__job"></p>
          <button className="button button_open-edit" onClick={onEditProfile}>Edit</button>
        </div>
        <button className="button button_open-add user-info__button" onClick={onAddPlace}>+</button>
      </div>
    </div>
    <div className="places-list root__section">
    </div>

    </main>
  );
}

export default Main;