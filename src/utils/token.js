class Token {
  setAccessToken(token) {
    localStorage.setItem("access", token);
  }
  setRefreshToken(token) {
    localStorage.setItem("refresh", token);
  }
  getAccesToken() {
    return localStorage.getItem("access");
  }
  getRefreshToken() {
    return localStorage.getItem("refresh");
  }
  logOut() {
    localStorage.clear();
  }
}

const token = new Token();

export default token;
