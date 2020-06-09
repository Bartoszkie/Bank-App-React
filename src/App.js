import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

//PAGES
import HomePage from "./pages/home-page/home-page.page";
import LoginPage from "./pages/login-page/login-page.page";
import UsersPage from "./pages/users-page/users-page.page";
import UserPanelPage from "./pages/user-panel-page/user-panel-page.component";

//COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ModalContainer from "./components/modal/modal-container.component";

import "./sass/styles.scss";
import { connect } from "react-redux";

const App = ({ loggiedIn }) => {
  const { pathname } = useLocation();

  console.log(loggiedIn);

  return (
    <div className="wrapper">
      <Header loggiedIn={loggiedIn} />
      <Route exact path="/" component={HomePage} />
      {!loggiedIn ? (
        <Route exact path="/login" component={LoginPage} />
      ) : loggiedIn && pathname === "/login" ? (
        <Redirect to="/" />
      ) : null}
      <Route exact path="/login/users" component={UsersPage} />
      <Route exact path="/login/users/userpanel" component={UserPanelPage} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggiedIn: state.userData.loggiedIn,
});

export default connect(mapStateToProps)(App);
