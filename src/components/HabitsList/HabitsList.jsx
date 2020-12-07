import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItem from "./HabitItem/HabitItem";
import Modal from "../Modal";
import HabitForm from "./HabitForm";
import { NavLink, Link } from "react-router-dom";
// import Context from "../../context/Context"; шаг №1
// import UserContext from "../../context/Context"; шаг №2
import withContext from "../hoc/withContext";

class HabitsList extends Component {
  state = {
    habits: [],
  };

  componentDidMount() {
    const array = JSON.parse(localStorage.getItem("state")) || [];
    this.setState({ habits: array });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state)
      localStorage.setItem("state", JSON.stringify(this.state.habits));
  }

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
    const { user } = this.props;
    return (
      // <UserContext.Consumer>
      //   {(user) => (
      <>
        <header>
          <NavLink to="/">Назад</NavLink>
          <img src={user.avatar} alt={user.name} />
          <div>Мой аккаунт</div>
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
        {user.habits.length ? (
          <ul>
            {user.habits.map((habit) => {
              return (
                <Link key={habit.id} to={`/profile/habitList/${habit.id}`}>
                  <HabitItem title={habit.title} progress={habit.progress} />
                </Link>
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
      //   )}
      // </UserContext.Consumer>
    );
  }
}
export default withContext(HabitsList);
