import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

class Profile extends Component {
  state = {
    avatar: "",
    height: "",
    weight: "",
    birthDate: "",
  };

  handleOnChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefalut();
    // updateProfile(); добавить локику сохранения профиля
    this.setState({
      avatar: "",
      height: "",
      weight: "",
      birthDate: "",
    });
  };

  render() {
    const { avatar, height, weight, birthDate } = this.state;
    return (
      <>
        <button type="button">Назад</button>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Сменить фото
            <input
              type="file"
              value={avatar}
              name="avatar"
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Рост
            <input
              type="number"
              value={height}
              name="height"
              onChange={this.handleOnChange}
              placeholder="170 см"
            />
          </label>
          <label>
            Вес
            <input
              type="number"
              value={weight}
              name="weight"
              onChange={this.handleOnChange}
              placeholder="70 кг"
            />
          </label>
          <label>
            Дата рождения
            <input
              type="date"
              value={birthDate}
              name="birthDate"
              onChange={this.handleOnChange}
              placeholder="01.01.1990"
            />
          </label>
          <input type="submit" value="Создать" />
        </form>
      </>
    );
  }
}

export default Profile;
