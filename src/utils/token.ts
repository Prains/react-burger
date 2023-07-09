class Token {
  private _checkIfTokenExist(rawToken: string | null): string {
    if (rawToken) {
      return rawToken;
    }
    return "";
  }

  public setAccessToken(token: string): void {
    localStorage.setItem("access", token);
  }

  public setRefreshToken(token: string): void {
    localStorage.setItem("refresh", token);
  }

  public getAccesToken(): string {
    return this._checkIfTokenExist(localStorage.getItem("access"));
  }

  public getRefreshToken(): string {
    return this._checkIfTokenExist(localStorage.getItem("refresh"));
  }

  public logOut(): void {
    localStorage.clear();
  }
}

const token = new Token();

export default token;
