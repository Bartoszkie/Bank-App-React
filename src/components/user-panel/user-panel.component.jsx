import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import MakeTransactionBeetweenUsers from "../maketransaction/make-transaction.component";

import ModalContainer from "../modal/modal-container.component";
import MakeTranasction from "../make-transaction/make-transaction.component";
import { connect } from "react-redux";
import { openModalAction } from "../redux/modal/modal.actions";
import { updateUserAmount } from "../redux/users/users.actions";

const UserPanel = ({ changeModal, usersData, usersAmount, setAmount }) => {
  const [payinModal, setpayinModal] = useState(false);
  const [payOutModal, setPayOutModal] = useState(false);
  const [makeTransactionModal, setMakeTransactionModal] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const history = useHistory();

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
    const getUserName = window.localStorage.getItem("access_token_username");
    const getUserPasswrod = window.localStorage.getItem(
      "access_token_password"
    );

    axios
      .get("/users/login", {
        headers: {
          Authorization: "Basic " + btoa(getUserName + ":" + getUserPasswrod),
        },
      })
      .then(() => {
        axios
          .get(`/accounts/${usersData.selectedUser.username}/balance`)
          .then((data) => {
            setUserDetails(data);
            setAmount(data.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  const returnToUsers = () => {
    history.push("/login/users");
  };

  return (
    <section className="userpanel">
      <div className="userpanel__resources">
        <button className="userpanel__resources__close" onClick={returnToUsers}>
          &larr;
        </button>
        <div className="userpanel__resources__circle">
          <div className="userpanel__resources__circle__content">
            <p className="userpanel__resources__circle__content__value">
              {usersAmount}
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
  usersAmount: state.userData.amout,
});

const mapDispatchToProps = (dispatch) => ({
  changeModal: () => dispatch(openModalAction()),
  setAmount: (value) => dispatch(updateUserAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
