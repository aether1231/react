import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={expensesFilterValue}
          onChangeFilerValue={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
