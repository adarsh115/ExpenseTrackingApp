import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInput, setuserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  //   const [enteredTitle, setenteredTitle] = useState("");
  //   const [enteredAmount, setenteredAmount] = useState("");
  //   const [enteredDate, setenteredDate] = useState("");
  const titleChangehandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  //**************************************************************
  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setuserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    props.onSaveExpenseDate(expenseData);
  };

  //**************************************************************

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangehandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2025-31-12"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.setisEditing} type="button">
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
