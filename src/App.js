import React, { Component, Suspense } from "react";
// import Authentification from "./components/Authentification/Authentification.js";
// import Loginization from "./components/Loginization/Loginization";
// import Registration from "./components/Registration/Registration";
// import Profile from "./components/Profile/Profile.js";
// import Modal from "./components/Modal";
// import HabitForm from "./components/HabitsList/HabitForm";
import HabitsList from "./components/HabitsList";
import { Route } from "react-router-dom";
import routes from "./routes.js";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.js";
import HabitProflie from "./components/HabitsList/HabitsProfile/HabitsProfile.jsx";
// import Context from "./context/Context"; шаг №1
import UserContext from "./context/Context"; //шаг №2

export default class App extends Component {
  state = {
    showModal: false,
    user: [
      {
        email: "",
        name: "",
        phone: "",
      },
    ],
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
      // <Context.Provider value={fetchedUser}>
      <UserContext>
        <ErrorBoundary>
          <Suspense fallback={<h1>Loading...</h1>}>
            {/* <Route path="/" exact component={Authentification} />
        <Route path="/login" exact component={Loginization} />
        <Route path="/registr" exact component={Registration} />
        <Route path="/profile" exact component={Profile} /> */}
            {routes.map((route, idx) => (
              <Route key={idx} {...route}></Route>
            ))}
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
            <Route
              path="/profile/habitList/:id"
              exact
              render={(props) => (
                <HabitProflie
                  {...props}
                  showModal={showModal}
                  modalToggle={this.modalToggle}
                />
              )}
            />
          </Suspense>
        </ErrorBoundary>
      </UserContext>
      // </Context.Provider>
    );
  }
}
