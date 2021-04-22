import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(porps) {
  const charDataPoints = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "March",
      value: 0,
    },
    {
      label: "April",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "June",
      value: 0,
    },
    {
      label: "July",
      value: 0,
    },
    {
      label: "August",
      value: 0,
    },
    {
      label: "September",
      value: 0,
    },
    {
      label: "October",
      value: 0,
    },
    {
      label: "November",
      value: 0,
    },
    {
      label: "December",
      value: 0,
    },
  ];
  for (const expense of porps.filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    charDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={charDataPoints} />;
}

export default ExpenseChart;
