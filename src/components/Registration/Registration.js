import React, { Component } from "react";
import styles from "./Registration.module.css";

class Registration extends Component {
  state = {
    name: "",
    surname: "",
    tel: "",
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {
    const { name, surname, tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <button type="button" className={styles.toBack}>
            Назад
          </button>
        </div>
        <form
          action="submit"
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Имя"
            onChange={this.handleChange}
          />

          <label htmlFor="surname">Фамилия</label>
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleChange}
          />

          <label htmlFor="tel">Номер телефона</label>
          <input
            type="tel"
            name="tel"
            value={tel}
            placeholder="+380"
            onChange={this.handleChange}
          />

          <input type="submit" value="Дальше" />
        </form>
      </>
    );
  }
}
export default Registration;
