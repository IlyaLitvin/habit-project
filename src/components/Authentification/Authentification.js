import React, { Component } from "react";
import Loginization from "../Loginization/Loginization.js";
import Registration from "../Registration/Registration.js";
import { NavLink } from "react-router-dom";
import styles from "./Authentification.module.css";

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

  // onBtnClick = (e) => {
  //   if (e.target.textContent === "Вход") {
  //     return <Loginization />;
  //   } else {
  //     return <Registration />;
  //   }
  // };

  render() {
    return (
      <>
        <section>
          <NavLink to="/login" className={styles.navLink}>
            Вход
          </NavLink>
          <NavLink to="/registr" className={styles.navLink}>
            Создать аккаунт
          </NavLink>
        </section>
      </>
    );
  }
}
