import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  closeModal = (e) => {
    if (e.code === "Escape") {
      this.props.modalToggle();
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.closeModal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.closeModal);
  };

  render() {
    return (
      <div className={styles.overlay} id="overlay">
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
