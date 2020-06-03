import React from "react";

const UserPanel = () => {
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
              <span class="userpanel__resources__maketransaction__payin__txt">
                wpłać środki
              </span>
            </div>
          </button>
          <button class="userpanel__resources__maketransaction__modal">
            <div class="userpanel__resources__maketransaction__payin">
              <span class="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span class="userpanel__resources__maketransaction__payin__txt">
                wypłać środki
              </span>
            </div>
          </button>
          <button class="userpanel__resources__maketransaction__modal">
            <div class="userpanel__resources__maketransaction__payin">
              <span class="userpanel__resources__maketransaction__payin__add">
                +
              </span>
              <span class="userpanel__resources__maketransaction__payin__txt">
                wykonaj przelew
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserPanel;
