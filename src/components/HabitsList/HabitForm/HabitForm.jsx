import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./HabitForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default class HabitForm extends Component {
  state = {
    title: "",
    comment: "",
    repeat: "",
    color: "#390093",
    remind: true,
  };

  closeId = null;

  handeSubmit = (event) => {
    event.preventDefault();
    const { title, comment, color, repeat, remind } = this.state;
    const habit = {
      id: uuidv4(),
      comment: comment,
      title: title,
      color: color,
      repeat: repeat,
      remind: remind,
      startDate: Date.now(),
      progress: this.toSetProgress(Date.now()),
    };
    this.props.toAddHabit(habit);
    this.setState({
      title: "",
      comment: "",
      repeat: "",
      color: "#390093",
      remind: true,
    });
    alert(`Your new habit ${title} added`);
    this.closeId = setTimeout(this.props.modalToggle, 1000);
  };
  componentWillUnmount() {
    clearTimeout(this.closeId);
  }
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  toSetProgress = (startDate) => {
    const dateNow = Date.now();
    const progress = Math.round(
      ((dateNow - startDate) * 100) / (21 * 24 * 60 * 60 * 1000)
    );
    return progress;
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
            <button type="button" onClick={this.props.modalToggle}>
              X
            </button>
            <h2>Новая привычка</h2>
            <label htmlFor="title">Название</label>
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Зарядка"
              onChange={this.handleChange}
            />
          </div>

          <label htmlFor="comment">Мотивируй себя</label>
          <input
            name="comment"
            type="textarea"
            placeholder="..."
            value={comment}
            onChange={this.handleChange}
          />

          <label htmlFor="repeat"></label>
          <select name="repeat" value={repeat} onChange={this.handleChange}>
            <option value="Каждый день">Каждый день &#5171;</option>
            <option value="Каждый час">Каждый час &#5171;</option>
          </select>

          <label htmlFor="color"></label>
          <input
            type="color"
            name="color"
            value={color}
            onChange={this.handleChange}
          />

          <label htmlFor="remind"></label>
          <input
            type="checkbox"
            name="remind"
            checked={remind}
            onChange={this.handleChange}
          />

          <button type="submit">Сохранить</button>
        </form>
      </div>
    );
  }
}
