import { baseUrl } from "./types";

class Api {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  private _checkServerResponce(res: Response) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${(res.status, res.ok)}`);
  }

  public getIngredientsData() {
    return fetch(`${this._url}/ingredients`).then((res) =>
      this._checkServerResponce(res)
    );
  }

  public postOrderData(data: any, token: string) {
    return fetch(`${this._url}/orders`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    }).then((res) => this._checkServerResponce(res));
  }

  public makeNewUser(user: any) {
    return fetch(`${this._url}/auth/register`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkServerResponce(res));
  }

  public authorizeUser(user: any) {
    return fetch(`${this._url}/auth/login`, {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkServerResponce(res));
  }

  public checkUser(token: string) {
    return fetch(`${this._url}/auth/user`, {
      method: "get",
      headers: {
        authorization: token,
      },
    }).then((res) => this._checkServerResponce(res));
  }

  public editUserData(token: string, user: any) {
    return fetch(`${this._url}/auth/user`, {
      method: "PATCH",
      headers: {
        authorization: token,
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    }).then((res) => this._checkServerResponce(res));
  }

  public logOut(refreshToken: string) {
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

  public refreshToken(token: string) {
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

  public resetPassword(email: string) {
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

  public createNewPassword(password: string, code: string) {
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
