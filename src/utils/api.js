import { baseUrl } from "./types";

class Api {
  constructor(url) {
    this._url = url;
  }
  _checkServerResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${(res.status, res.ok)}`);
  }
  getIngredientsData() {
    return fetch(`${this._url}/ingredients`).then((res) =>
      this._checkServerResponce(res)
    );
  }
  postOrderData(data) {
    return fetch(`${this._url}/orders`, {
      method: "post",
      body: JSON.stringify({
        ingredients: data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkServerResponce(res));
  }
  makeNewUser(user) {
    return fetch(`${this._url}/auth/register`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkServerResponce(res));
  }
  authorizeUser(user) {
    return fetch(`${this._url}/auth/login`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkServerResponce(res));
  }
  checkUser(token) {
    return fetch(`${this._url}/auth/user`, {
      method: "get",
      headers: {
        authorization: token,
      },
    }).then((res) => this._checkServerResponce(res));
  }
  logOut(refreshToken) {
    return fetch(`${this._url}/auth/logout`, {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._checkServerResponce(res));
  }
  refreshToken(token) {
    return fetch(`${this._url}/auth/token`, {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: token,
      }),
    }).then((res) => this._checkServerResponce(res));
  }
  resetPassword(email) {
    return fetch(`${this._url}/password-reset`, {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => this._checkServerResponce(res));
  }
  createNewPassword(password, code) {
    return fetch(`${this._url}/password-reset/reset`, {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    }).then((res) => this._checkServerResponce(res));
  }
}

const api = new Api(baseUrl);
export default api;
