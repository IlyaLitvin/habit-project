import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItem from "./HabitItem/HabitItem";
import Modal from "../Modal";
import HabitForm from "./HabitForm";
import { NavLink } from "react-router-dom";

export default class HabitsList extends Component {
  state = {
    habits: [
      {
        id: "",
        title: "Зарядка",
        startDate: "",
        progress: "",
      },
    ],
  };

  toAddHabit = (habit) => {
    this.setState((prevState) => ({
      habits: [...prevState.habits, habit],
    }));
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
    const { habits } = this.state;
    return (
      <>
        <header>
          <div>Мой аккаунт</div>
          <NavLink to="/profile/habitList">X</NavLink>
        </header>
        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabit={this.toAddHabit}
            />
          </Modal>
        )}
        <div>Календарь</div>
        <h1>Мои привычки</h1>
        {habits.length ? (
          <ul>
            {habits.map((habit) => {
              return (
                <HabitItem
                  key={habit.id}
                  title={habit.title}
                  progress={habit.progress}
                />
              );
            })}
          </ul>
        ) : (
          <p>У вас пока нету привычек Нажмите +, чтобы добавить первую</p>
        )}
        <button type="button" onClick={this.props.modalToggle}>
          +
        </button>
      </>
    );
  }
}
