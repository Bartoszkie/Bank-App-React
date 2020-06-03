import React, { useState } from "react";

import ModalContainer from "../modal/modal-container.component";
import MakeTranasction from "../make-transaction/make-transaction.component";
import { connect } from "react-redux";
import { openModalAction } from "../redux/modal/modal.actions";

const UserPanel = ({ changeModal }) => {
  const [payinModal, setpayinModal] = useState({});

  const payInRender = () => {
    setpayinModal(true);
    changeModal();
  };

  return (
    <section class="userpanel">
      <div class="userpanel__resources">
        <div class="userpanel__resources__circle">
          <div class="userpanel__resources__circle__content">
            <p class="userpanel__resources__circle__content__value">1 444 zł</p>
            <p class="userpanel__resources__circle__content__account">
              konto direct Emanuel Kak
            </p>
          </div>
        </div>
        <span class="divider"></span>
        <div class="userpanel__resources__maketransaction">
          <button class="userpanel__resources__maketransaction__modal">
            <div class="userpanel__resources__maketransaction__payin">
              <span class="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                class="userpanel__resources__maketransaction__payin__txt"
                onClick={payInRender}
              >
                wpłać środki
              </span>
            </div>
          </button>
          <button class="userpanel__resources__maketransaction__modal">
            <div class="userpanel__resources__maketransaction__payin">
              <span class="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                class="userpanel__resources__maketransaction__payin__txt"
                onClick={payInRender}
              >
                wypłać środki
              </span>
            </div>
          </button>
          <button class="userpanel__resources__maketransaction__modal">
            <div class="userpanel__resources__maketransaction__payin">
              <span class="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                class="userpanel__resources__maketransaction__payin__txt"
                onClick={payInRender}
              >
                wykonaj przelew
              </span>
            </div>
          </button>
        </div>
      </div>
      {payinModal ? (
        <ModalContainer state={payinModal} changeState={setpayinModal}>
          <MakeTranasction wypłata="false" />
        </ModalContainer>
      ) : null}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
});

export default connect(null, mapDispatchToProps)(UserPanel);
