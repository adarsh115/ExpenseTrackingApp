import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  console.log("datavalue", dataValues);
  const totalmaximum = Math.max(...dataValues);
  console.log(totalmaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalmaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
