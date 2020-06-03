import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/login">Zaloguj</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
