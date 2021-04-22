import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseList.css";

function ExpenseList({ filteredExpenses }) {
  return (
    <div className="expenses-list">
      {filteredExpenses.length ? (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      ) : (
        <h2 className="expenses-list__fallback">No Expense found</h2>
      )}
    </div>
  );
}

export default ExpenseList;
