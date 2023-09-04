import { Chart } from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];
const options = {
  titleTextStyle: {
    color: "white",
  },
  backgroundColor: "#334155",

  legendTextStyle: {
    bold: true,
    color: "white",
  },
};
function GeoChart(prop) {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
          },
        },
      ]}
      options={options}
      chartType="GeoChart"
      width="100%"
      height={`${prop.height}`}
      data={data}
    />
  );
}
export default GeoChart;
