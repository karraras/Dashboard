import { Chart } from "react-google-charts";

const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];
const options = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%", color: "white" },
  isStacked: true,
  hAxis: {
    title: "Total Population",
    minValue: 0,
    color: "white",
  },
  vAxis: {
    title: "City",
    color: "white",
  },
  annotations: {
    textStyle: {
      fontSize: 12,
      color: "white",
    },
  },
  backgroundColor: "#334155",
  titleTextStyle: {
    color: "white",
  },

  legendTextStyle: {
    bold: true,
    color: "white",
  },
};

function BarCharts(prop) {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height={`${prop.height}`}
      data={data}
      options={options}
    />
  );
}

export default BarCharts;
