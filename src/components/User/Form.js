import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const dataItem = {};

  const [userName, setUserName] = useState("");
  const userNameHandler = (event) => {
    setUserName(event.target.value);
    dataItem.name = event.target.value;
  };
  const [age, setAge] = useState("");
  const ageHandler = (event) => {
    setAge(event.target.value);
    dataItem.age = event.target.value;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSetUser({ userName, age });

    // only clear form fields if age is valid
    if (Number(age) > 0) {
      setUserName("");
      setAge("");
    }
  };

  return (
    <form className={styles.form} users={props.users} onSubmit={submitHandler}>
      <div className={styles.fields}>
        <label>User Name</label>
        <input type="text" value={userName} onChange={userNameHandler} />
      </div>
      <div className={styles.fields}>
        <label>Age (Years)</label>
        <input type="text" value={age} onChange={ageHandler} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
