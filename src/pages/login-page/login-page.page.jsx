import React from "react";

const LoginPage = () => {
  return (
    <section className="loginpage">
      <div className="loginpage__content">
        <div className="loginpage__content__info">
          <h3 className="loginpage__content__info__heading">Zaloguj się</h3>
          <p className="loginpage__content__info__paragraph">
            zaloguj się do bankowości internetowej
          </p>
        </div>
        <form className="loginpage__content__form">
          <div className="loginpage__content__form__inputgroup">
            <label htmlFor="login">Login: </label>
            <input type="text" />
          </div>

          <div className="loginpage__content__form__inputgroup">
            <label for="password">Hasło: </label>
            <input type="password" name="password" id="password" />
          </div>

          <button className="loginpage__content__form__submit">Dalej</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
