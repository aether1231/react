import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [expensesFilterValue, setExpensesFilterValue] = useState(
    new Date().getFullYear() + ""
  );
  const filterChangeHandler = (year) => {
    setExpensesFilterValue(year);
    console.log(year);
  };

  const filteredExpenses = props.data.filter(
    (expenses) =>
      new Date(expenses.date).getFullYear() + "" === expensesFilterValue
  );

  let expensesFound = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesFound = filteredExpenses.map((expenses) => {
      return (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      );
    });
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={expensesFilterValue}
          onChangeFilerValue={filterChangeHandler}
        />
        {expensesFound}
      </Card>
    </div>
  );
};

export default Expenses;
