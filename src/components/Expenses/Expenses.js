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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={expensesFilterValue}
          onChangeFilerValue={filterChangeHandler}
        />
        {filteredExpenses &&
          filteredExpenses.map((expenses) => {
            return (
              <ExpenseItem
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount}
                date={expenses.date}
              />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
