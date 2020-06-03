import React from "react";

import Zdjecie1 from "../../assets/img/zdjecie1.jpg";
import Zdjecie2 from "../../assets/img/zdjecie2.jpg";
import Zdjecie3 from "../../assets/img/zdjecie23.jpg";
import Zdjecie4 from "../../assets/img/zdjecie4.jpg";
import Zdjecie5 from "../../assets/img/zdjecie5.jpg";
import Zdjecie6 from "../../assets/img/zdjecie6.jpg";
import Zdjecie7 from "../../assets/img/zdjecie7.jpg";
import Zdjecie8 from "../../assets/img/zdjecie8.jpg";
import Zdjecie9 from "../../assets/img/zdjecie9.jpg";
import Zdjecie10 from "../../assets/img/zdjecie10.jpg";
import Zdjecie11 from "../../assets/img/zdjecie11.jpg";
import Zdjecie12 from "../../assets/img/zdjecie12.jpg";

const Details = () => {
  return (
    <div className="details" id="details">
      <div className="details__header">
        <h2 className="details__header__h2">Poznaj nas!</h2>
      </div>
      <div className="details__grid">
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie1}` }}
        >
          <p>Wszyscy idą do nas</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie2}` }}
        >
          <p>Jesteśmy otwarci na rozmowy</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{
            backgroundImage: `url(${Zdjecie3}`,
          }}
        >
          <p>Modni</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie4}` }}
        >
          <p>Najlepsze zabezpieczenia finansowe</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie5}`}}
        >
          <p>Wszyscy idą do nas</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie6}` }}
        >
          <p>Lubimy sie spotkać</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie7}` }}
        >
          <p>Jesteśmy globalni</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie8}` }}
        >
          <p>Pomagamy wszystkim</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie9}` }}
        >
          <p>Zawsze trafiamy do celu</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{
            backgroundImage: `url(${Zdjecie10}`,
          }}
        >
          <p>Ścigamy się o prestiż</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{
            backgroundImage: `url(${Zdjecie11}`,
          }}
        >
          <p>Patrzymy z innej perspektywy</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{
            backgroundImage: `url(${Zdjecie12}`,
          }}
        >
          <p>Znamy potrzeby</p>
        </figure>
        <figure
          className="details__grid__item"
          style={{ backgroundImage: `url(${Zdjecie11}` }}
        >
          <p>Przechodzimy przez wszystko razem</p>
        </figure>
      </div>
    </div>
  );
};

export default Details;
