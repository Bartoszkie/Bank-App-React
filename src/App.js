import React from "react";
import { Route } from "react-router-dom";

//PAGES
import HomePage from "./pages/home-page/home-page.page";
import LoginPage from "./pages/login-page/login-page.page";
import UsersPage from "./pages/users-page/users-page.page";
import UserPanelPage from "./pages/user-panel-page/user-panel-page.component";

//COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import "./sass/styles.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/login/users" component={UsersPage} />
      <Route exact path="/login/users/userpanel" component={UserPanelPage} />
      <Footer />
    </div>
  );
};

export default App;
