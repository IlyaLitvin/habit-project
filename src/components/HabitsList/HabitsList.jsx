import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItem from "./HabitItem/HabitItem";

export default class HabitsList extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  state = {
    habits: [
      {
        id: "1",
        title: "Зарядка",
        startDate: "",
        progress: "",
      },
    ],
  };

  toSetProgress = (startDate) => {
    const dateNow = Date.now();
    const progress =
      Math.round((dateNow - startDate) * 100) / (21 * 24 * 60 * 1000);
    return progress;
  };

  toChangeProgress = (id) => {
    this.setState((prevState) => {
      const obj = prevState.habits.find((habit) => {
        return habit.id === id;
      });
      obj.progress = this.toSetProgress(obj.startDate);
      return obj;
    });
  };

  render() {
    const { habits } = this.state.habits;
    return (
      <>
        <header>
          <div>Мой аккаунт</div>
          <button type="button"></button>
        </header>
        <div>Календарь</div>
        <h1>Мои привычки</h1>
        {this.state.habits.length ? (
          <ul>
            {habits.map((habit) => {
              return (
                <HabitItem
                  key={habit.id}
                  progress={() => this.toChangeProgress(habit.id)}
                  title={habit.title}
                />
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нету привычек Нажмите +, чтобы добавить первую</p>
        )}
        <button type="button">+</button>
      </>
    );
  }
}
