import React from "react";

const LoginPage = () => {
  return (
    <section class="loginpage">
      <div class="loginpage__content">
        <div class="loginpage__content__info">
          <h3 class="loginpage__content__info__heading">Zaloguj się</h3>
          <p class="loginpage__content__info__paragraph">
            zaloguj się do bankowości internetowej
          </p>
        </div>
        <form class="loginpage__content__form">
          <div class="loginpage__content__form__inputgroup">
            <label for="login">Login: </label>
            <input type="text" />
          </div>

          <div class="loginpage__content__form__inputgroup">
            <label for="password">Hasło: </label>
            <input type="password" name="password" id="password" />
          </div>

          <button class="loginpage__content__form__submit">Dalej</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
