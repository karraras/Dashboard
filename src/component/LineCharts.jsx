import { mockLineData } from "../component/mockData";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
      align: "bottom",
      color: "white",
    },
    title: {
      display: true,
      text: "Revenue Generated",
      font: { size: 10 },
      position: "top",
      align: "left",
      color: "white",
    },
    scales: {
      x: {
        grid: {
          display: true,
        },
        title: {
          display: true,
          text: "data in month",
          font: { size: 10 },
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  },
};

function LineCharts() {
  const data = {
    labels: mockLineData[0].data.map((ite) => ite.x),
    datasets: mockLineData.map((item) => {
      return {
        label: item.id,
        data: item.data.map((ite) => ite.y),
        borderColor: item.borderColor,
        backgroundColor: item.backgroundColor,
        tension: item.tension,
      };
    }),
  };
  return (
    <Line
      width={600}
      height={250}
      data={data}
      options={options}
      className="bg-slate-700  "
    />
  );
}

export default LineCharts;
