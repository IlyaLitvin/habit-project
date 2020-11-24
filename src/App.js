import React, { Component } from "react";
import "./App.css";
import Authentification from "./components/Authentification/Authentification.js";
import Loginization from "./components/Loginization/Loginization";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Authentification />
        <Loginization />
        <Registration />
        <Profile />
      </>
    );
  }
}
