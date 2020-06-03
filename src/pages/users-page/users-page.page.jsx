import React from "react";

const UsersPage = () => {
  return (
    <section className="users">
      <div className="users__content">
        <div className="users__content__headings">
          <p className="users__content__headings__heading">
            Wybierz użytkownika
          </p>
          <p className="users__content__headings__heading">Dodaj użytkownika</p>
        </div>

        <div className="users__content__details">
          <div className="users__content__select">
            <div className="users__content__select__allusers">
              <a
                routerLink="userpanel"
                className="users__content__select__allusers__usercontent"
              >
                <span className="users__content__select__allusers__usercontent__user">
                  Emaunel Kak
                </span>
                <span className="users__content__select__allusers__usercontent__user">
                  Data: 12.12.2020
                </span>
              </a>
              <a
                routerLink="userpanel"
                className="users__content__select__allusers__usercontent"
              >
                <span className="users__content__select__allusers__usercontent__user">
                  Emaunel Kak
                </span>
                <span className="users__content__select__allusers__usercontent__user">
                  Data: 12.12.2020
                </span>
              </a>
              <a
                routerLink="userpanel"
                className="users__content__select__allusers__usercontent"
              >
                <span className="users__content__select__allusers__usercontent__user">
                  Emaunel Kak
                </span>
                <span className="users__content__select__allusers__usercontent__user">
                  Data: 12.12.2020
                </span>
              </a>
            </div>
          </div>

          <div className="users__content__add">
            <p className="users__content__add__heading">Dodaj użytkownika</p>
            <button className="users__content__add__add">+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersPage;
