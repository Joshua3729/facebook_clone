import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import Background from "../Background/Background";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <Background show={props.show} clicked={props.clicked} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%,-50%) scale(0)",
          opacity: props.show ? "1" : "1",
        }}
      >
        {props.children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
