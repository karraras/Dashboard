import Title1 from "../component/Title1";
import LineCharts from "../component/LineCharts";
function LineChart() {
  return (
    <section>
      <div className="my-4">
        <Title1 text="Simple Line Chart" title="LIne Chart" />
      </div>
      <div>
        <LineCharts />
      </div>
    </section>
  );
}

export default LineChart;
