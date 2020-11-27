import React, { Component } from "react";
import "./App.css";
import Authentification from "./components/Authentification/Authentification.js";
import Loginization from "./components/Loginization/Loginization";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile.js";
import HabitForm from "./components/HabitsList/HabitForm";
import Modal from "./components/Modal";
import HabitsList from "./components/HabitsList";

export default class App extends Component {
  state = {
    showModal: false,
  };

  modalToggle = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Authentification />
        <Loginization />
        <Registration />
        <Profile />
        <HabitsList showModal={showModal} modalToggle={this.modalToggle} />
      </>
    );
  }
}
