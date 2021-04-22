import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setisEditing] = React.useState(false);
  const handleSaveExpenseDate = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const handleIsEditing = () => {
    setisEditing((prev) => !prev);
  };
  // const SetIsEditing = () => {
  //   setisEditing(false);
  // };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          setisEditing={handleIsEditing}
          onSaveExpenseDate={handleSaveExpenseDate}
        />
      ) : (
        <button onClick={handleIsEditing}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
