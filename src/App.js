import React, { Component } from "react";
import "./App.css";
import Authentification from "./components/Authentification/Authentification.js";
import Loginization from "./components/Loginization/Loginization";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile.js";
import HabitForm from "./components/HabitsList/HabitForm";
import Modal from "./components/Modal";
import HabitsList from "./components/HabitsList";
import { Route } from "react-router-dom";

export default class App extends Component {
  state = {
    showModal: false,
    user: [{}],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  modalToggle = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Route path="/" exact component={Authentification} />
        <Route path="/login" exact component={Loginization} />
        <Route path="/registr" exact component={Registration} />
        <Route path="/profile" exact component={Profile} />
        <Route
          path="/profile/habitList"
          exact
          render={(props) => (
            <HabitsList
              {...props}
              showModal={showModal}
              modalToggle={this.modalToggle}
            />
          )}
        />
      </>
    );
  }
}
