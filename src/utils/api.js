export default class Api {
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
    return fetch(this._url)
      .then(res => this._checkServerResponce(res))
  }
}
