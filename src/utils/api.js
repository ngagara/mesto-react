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

  // getCard(cardName, cardLink) {
  //     return fetch(`${this.baseUrl}/cards`, {
  //         method: 'PATCH',
  //         headers: this.headers,
  //         body: JSON.stringify({
  //             name: cardName,
  //             link: cardLink
  //         })
  //     })
  //         .then(res => {
  //             if (!res.ok) {
  //                 return Promise.reject(`Ошибка:${res.status}`);
  //             } else {
  //                 return res.json();
  //             }
  //         })
  //         .then(res => {
  //             console.log(res)
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         })
  // };

};

const api = new Api({
  baseUrl: "https://nomoreparties.co/cohort11",
  headers: {
    authorization: 'a0621f41-ad7c-4fb1-8764-077b435bf777',
    'Content-Type': 'application/json'
  }
});

export default api;