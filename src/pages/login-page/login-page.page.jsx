import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";
import axios from "axios";

import { userLoginAction } from "../../components/redux/users/users.actions";
// import { userLoginAction } from "../../components/redux/login/login.utils";

const LoginPage = ({ loggedin }) => {
  const [userName, setUsername] = useState("");
  const [passwordm, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // userLoginAction(userName, passwordm);
    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa(userName + ":" + passwordm),
        },
      })
      .then((data) => {
        loggedin();
        const acces_token_username = userName;
        const acces_token_password = passwordm;
        window.localStorage.setItem("access_token_username", acces_token_username);
        window.localStorage.setItem("access_token_password", acces_token_password);
        console.log(data);
        history.push("/login/users");
      })
      .catch((error) => console.log(error));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log(userName, passwordm);
  console.log(window.localStorage.getItem("access_token_username"));

  return (
    <section className="loginpage">
      <div className="loginpage__content">
        <div className="loginpage__content__info">
          <h3 className="loginpage__content__info__heading">Zaloguj się</h3>
          <p className="loginpage__content__info__paragraph">
            zaloguj się do bankowości internetowej
          </p>
        </div>
        <form className="loginpage__content__form" onSubmit={handleSubmit}>
          <div className="loginpage__content__form__inputgroup">
            <label htmlFor="login">Login: </label>
            <input onChange={handleUsername} type="text" />
          </div>

          <div className="loginpage__content__form__inputgroup">
            <label htmlFor="password">Hasło: </label>
            <input
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button className="loginpage__content__form__submit">Dalej</button>
        </form>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loggedin: () => dispatch(userLoginAction()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
