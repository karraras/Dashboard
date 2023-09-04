import Title1 from "../component/Title1";

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  backgroundColor: "#1e293b",
  titleTextStyle: {
    color: "white",
  },

  legendTextStyle: {
    bold: true,
    color: "white",
  },
};

function PieCharts() {
  return (
    <section className="text-white">
      <div className="my-4">
        <Title1 text="Simple Pie Chart" title="Pie Chart" />
      </div>
      <div>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </section>
  );
}

export default PieCharts;
