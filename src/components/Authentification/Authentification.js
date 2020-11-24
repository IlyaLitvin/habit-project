import React, { Component } from "react";
import Loginization from "../Loginization/Loginization.js";
import Registration from "../Registration/Registration.js";

export default class Authentification extends Component {
  state = {
    users: [
      {
        name: "Ilya",
        surname: "Piton",
        phone: "+380637212128",
      },
    ],
  };

  onBtnClick = (e) => {
    if (e.target.textContent === "Вход") {
      return <Loginization />;
    } else {
      return <Registration />;
    }
  };

  render() {
    return (
      <>
        <section>
          <button type="button" onClick={this.onBtnClick}>
            Вход
          </button>
          <button type="button" onClick={this.onBtnClick}>
            Создать аккаунт
          </button>
        </section>
      </>
    );
  }
}
