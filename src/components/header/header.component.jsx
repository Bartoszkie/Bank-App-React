import React from "react";
import { openModalAction } from "../redux/modal/modal.actions";
import ModalContainer from "../../components/modal/modal-container.component";
import { userLogOut } from "../../components/redux/users/users.actions";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ loggiedIn, logOut }) => {
  return (
    <header className="header">
      <nav className="header__nav__desktop">
        <Link to="/">
          <h1 className="header__nav__desktop__header">ING Bank</h1>
        </Link>
        <ul className="header__nav__desktop__list">
          <Link to="/" className="header__nav__desktop__list__item">
            O nas
          </Link>
          <li className="header__nav__desktop__list__item">Regulamin</li>
          <li className="header__nav__desktop__list__item">Możliwości</li>
          <li className="header__nav__desktop__list__item">
            {loggiedIn ? (
              <Link to="/" onClick={logOut}>Wyloguj</Link>
            ) : (
              <Link to="/login">Zaloguj</Link>
            )}
            {/* <Link to="/login">Zaloguj</Link> */}
          </li>
        </ul>
      </nav>
      <ModalContainer title="Strona w budowie!"></ModalContainer>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
  logOut: () => dispatch(userLogOut()),
});

export default connect(null, mapDispatchToProps)(Header);
