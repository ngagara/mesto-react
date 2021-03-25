class Api {
  constructor(options) {
      this.baseUrl = options.baseUrl;
      this.headers = options.headers;
  }

  getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
          headers: this.headers
      })
          .then(res => {
              if (!res.ok) {
                  return Promise.reject(`Ошибка:${res.status}. Запрос не выполнен.`);
              } else {
                  return res.json();
              }
          })
  };

  getUserInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
          headers: this.headers
      })
          .then(res => {
              if (!res.ok) {
                  return Promise.reject(`Ошибка:${res.status}. Запрос не выполнен.`);
              } else {
                  return res.json();
              }
          })
  };

  editUserInfo(namePerson, aboutPerson) {
      return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
              name: namePerson,
              about: aboutPerson
          })
      })
          .then(res => {
              if (!res.ok) {
                  return Promise.reject(`Ошибка:${res.status}`);
              } else {
                  return res.json();
              }
          })
  }

   changeLikeCardStatus(cardId, status) {
      return fetch(`${this.baseUrl}/cards/like/${cardId}`, {
        method: (status) ? 'PUT' : 'DELETE',
        headers: this.headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
   }

   deleteCard(id) {
    return fetch(`${this.aseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

  updateUserInfo (nameInput, aboutInput) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: nameInput,
        about: aboutInput,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ужасная ошибка: ${res.status}`);
    });
  };

  postCard (name, link) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

};

const api = new Api({
  baseUrl: "https://nomoreparties.co/cohort11",
  headers: {
    authorization: 'a0621f41-ad7c-4fb1-8764-077b435bf777',
    'Content-Type': 'application/json'
  }
});

export default api;