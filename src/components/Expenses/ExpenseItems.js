import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItems.css";

function ExpenseItems({ title, amount, date }) {
  const [itemTitle, setitemTitle] = useState(title);
  const handleClick = (event) => {
    setitemTitle("event.target.value");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">{amount}</div>
          <button onClick={handleClick}>Change Title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
