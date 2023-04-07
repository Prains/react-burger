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
      this._checkServerResponce(res).catch((error) => {
        console.error("Error fetching data:", error);
      })
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
    })
      .then((res) => this._checkServerResponce(res))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}

const api = new Api(baseUrl);
export default api;
