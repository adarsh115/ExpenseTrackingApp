import "./Expenses.css";

import React, { useState } from "react";
// import Card from "./Card";

import Filter from "../YearFilter/Filter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [selectedYear, setselectedYear] = useState(2020);
  const handleExpenseFilter = (year) => {
    setselectedYear(year);
  };
  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );
  return (
    <div className="expenses">
      <Filter
        currentYear={selectedYear}
        onExpenseFilter={handleExpenseFilter}
      />
      <ExpenseChart filteredExpenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </div>
  );
}

export default Expenses;
