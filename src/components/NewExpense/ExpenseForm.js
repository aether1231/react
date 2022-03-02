import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // store field values on change in enteredTitle, enteredAmount and enteredDate
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const [enteredDate, setEnteredDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id: Math.random().toString,
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    // clear all fields after submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(new Date().toISOString().substring(0, 10));
    setShowExpenseForm("Y");
  };

  const [showExpenseForm, setShowExpenseForm] = useState("Y");
  const toggleShowNewExpenseForm = (event) => {
    setShowExpenseForm(showExpenseForm === "Y" ? "N" : "Y");
  };

  if (showExpenseForm === "N") {
    return (
      <form>
        <div className="new-expense__show-new">
          <button type="button" onClick={toggleShowNewExpenseForm}>
            Add New Expense
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggleShowNewExpenseForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
