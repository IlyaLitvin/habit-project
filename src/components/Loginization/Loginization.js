import React, { Component } from "react";
import styles from "./Loginization.module.css";

class Loginization extends Component {
  state = {
    tel: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(this.state));
  };

  render() {
    const { tel } = this.state;
    return (
      <>
        <div className={styles.header}>
          <button type="button">Назад</button>
        </div>
        <form
          action="submit"
          className={styles.regForm}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="userPhone">Номер телефона</label>
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={this.handleChange}
            placeholder="+380"
          />
          <input type="submit" value="Дальше" />
        </form>
      </>
    );
  }
}

export default Loginization;
