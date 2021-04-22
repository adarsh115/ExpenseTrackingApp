import "./App.css";
import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 50000,
    date: new Date(),
  },
  {
    id: "e2",
    title: "SIP",
    amount: 100000,
    date: new Date(),
  },
];

function App() {
  const [myExpenses, setmyExpenses] = React.useState(DUMMY_EXPENSES);

  const handleAddExpense = (expense) => {
    setmyExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="app">
      <NewExpense onAddExpense={handleAddExpense} />

      <Expenses expenses={myExpenses} />
    </div>
  );
}

export default App;
