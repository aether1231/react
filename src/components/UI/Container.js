import React from "react";
import Form from "../User/Form";
import List from "../User/List";
import styles from "./Container.module.css";

const Container = (props) => {
  const setNewUserHandler = (userData) => {
    const newUser = {
      key: Math.random().toString(),
      name: userData.userName,
      age: userData.age,
    };
    props.onAddUser(newUser);
  };

  return (
    <div className={styles.outer}>
      <Form users={props.data} onSetUser={setNewUserHandler} />
      {props.data.length && <List listData={props.data} />}
    </div>
  );
};

export default Container;
