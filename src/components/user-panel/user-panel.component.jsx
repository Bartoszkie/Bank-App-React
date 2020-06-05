import React, { useState, useEffect } from "react";
import axios from "axios";

import MakeTransactionBeetweenUsers from "../maketransaction/make-transaction.component";

import ModalContainer from "../modal/modal-container.component";
import MakeTranasction from "../make-transaction/make-transaction.component";
import { connect } from "react-redux";
import { openModalAction } from "../redux/modal/modal.actions";

const UserPanel = ({ changeModal, usersData }) => {
  const [payinModal, setpayinModal] = useState(false);
  const [payOutModal, setPayOutModal] = useState(false);
  const [makeTransactionModal, setMakeTransactionModal] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const payInRender = () => {
    setpayinModal(true);
    changeModal();
  };

  const payOutRender = () => {
    setPayOutModal(true);
    changeModal();
  };

  const transactionModalRender = () => {
    setMakeTransactionModal(true);
    changeModal();
  };

  useEffect(() => {
    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa("user" + ":" + "12345"),
        },
      })
      .then(() => {
        axios
          .get(`/accounts/${usersData.selectedUser.username}/balance`)
          .then((data) => setUserDetails(data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("amount:", userDetails.data);

  return (
    <section className="userpanel">
      <div className="userpanel__resources">
        <div className="userpanel__resources__circle">
          <div className="userpanel__resources__circle__content">
            <p className="userpanel__resources__circle__content__value">
              {userDetails.data}
              zł
            </p>
            <p className="userpanel__resources__circle__content__account">
              konto direct {usersData.selectedUser.username}
            </p>
          </div>
        </div>
        <span className="divider"></span>
        <div className="userpanel__resources__maketransaction">
          <button className="userpanel__resources__maketransaction__modal">
            <div className="userpanel__resources__maketransaction__payin">
              <span className="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                className="userpanel__resources__maketransaction__payin__txt"
                onClick={payInRender}
              >
                wpłać środki
              </span>
            </div>
          </button>
          <button className="userpanel__resources__maketransaction__modal">
            <div className="userpanel__resources__maketransaction__payin">
              <span className="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                className="userpanel__resources__maketransaction__payin__txt"
                onClick={payOutRender}
              >
                wypłać środki
              </span>
            </div>
          </button>
          <button className="userpanel__resources__maketransaction__modal">
            <div className="userpanel__resources__maketransaction__payin">
              <span className="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span
                className="userpanel__resources__maketransaction__payin__txt"
                onClick={transactionModalRender}
              >
                wykonaj przelew
              </span>
            </div>
          </button>
        </div>
      </div>
      {payinModal ? (
        <ModalContainer state={payinModal} changeState={setpayinModal}>
          <MakeTranasction
            user={usersData.selectedUser.username}
            wypłata={false}
            wpłata={true}
          />
        </ModalContainer>
      ) : null}

      {payOutModal ? (
        <ModalContainer state={payOutModal} changeState={setPayOutModal}>
          <MakeTranasction
            user={usersData.selectedUser.username}
            wypłata={true}
            wpłata={false}
          />
        </ModalContainer>
      ) : null}

      {makeTransactionModal ? (
        <ModalContainer
          state={makeTransactionModal}
          changeState={setMakeTransactionModal}
        >
          <MakeTransactionBeetweenUsers />
        </ModalContainer>
      ) : null}
    </section>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
