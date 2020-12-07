import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Modal from "../../Modal";
import HabitForm from "../HabitForm";

export default class HabitsProfile extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <header>
          <NavLink to="/profile/habitlist">Назад</NavLink>
          <h2>title</h2>
          <button type="button" onClick={this.props.modalToggle}>
            Править
          </button>
        </header>

        {this.props.showModal && (
          <Modal modalToggle={this.props.modalToggle}>
            <HabitForm
              modalToggle={this.props.modalToggle}
              toAddHabit={this.toAddHabit}
            />
          </Modal>
        )}
      </>
    );
  }
}
