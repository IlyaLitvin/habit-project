import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./HabitForm.module.css";

export default class HabitForm extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    title: "",
    comment: "",
    repeat: "",
    color: "#390093",
    remind: true,
  };

  handeSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state, null, 2));
  };

  handeChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  render() {
    const { title, comment, repeat, color, remind } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handeSubmit}>
          <div
            className={styles.headerWrapper}
            style={{ backgroundColor: this.state.color }}
          >
            <button type="button">X</button>
            <h2>Новая привычка</h2>
            <label htmlFor="title">Название</label>
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Зарядка"
              onChange={this.handeChange}
            />
          </div>

          <label htmlFor="comment">Мотивируй себя</label>
          <input
            name="comment"
            type="textarea"
            placeholder="..."
            value={comment}
            onChange={this.handeChange}
          />

          <label htmlFor="repeat"></label>
          <select name="repeat" value={repeat}>
            <option value="Каждый день">Каждый день &#5171;</option>
            <option value="Каждый час">Каждый час &#5171;</option>
          </select>

          <label htmlFor="color"></label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={this.handeChange}
          />

          <label htmlFor="remind"></label>
          <input
            type="checkbox"
            name="remind"
            checked={remind}
            onChange={this.handeChange}
          />

          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
