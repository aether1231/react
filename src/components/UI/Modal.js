import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const clickHandler = (event) => {
    props.onClickModal(props.modalText);
  };
  return (
    <div className={styles.modal} modal="true">
      <div className={styles["modal-header"]}>Invalid Input</div>
      <div className={styles["modal-body"]}>
        {props.text}
        <div>
          <button className={styles["modal-button"]} onClick={clickHandler}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
