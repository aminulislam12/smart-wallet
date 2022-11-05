import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Language", "Speakers (in millions)"],
  ["German", 5.85],
  ["French", 1.66],
  ["Italian", 0.316],
  ["Romansh", 0.0791],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 100,
};

export default function CategoryChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"237px"}
    />
  );
}
