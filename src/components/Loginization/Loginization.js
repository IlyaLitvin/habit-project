import React from "react";
import styles from "./Loginization.module.css";

const Loginization = function () {
  return (
    <>
      <div className={styles.header}>
        <button type="button">Назад</button>
      </div>
      <form action="submit" className={styles.regForm}>
        <label htmlFor="userPhone">Номер телефона</label>
        <input type="text" name="userPhone" placeholder="+380" />
        <input type="submit" value="Дальше" />
      </form>
    </>
  );
};

export default Loginization;
