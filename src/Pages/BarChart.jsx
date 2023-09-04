import Title1 from "../component/Title1";
import BarCharts from "../component/BarCharts";
function BarChart() {
  return (
    <section>
      <div className="my-4">
        <Title1 text="Simple Bar Chart" title="Bar Chart" />
      </div>
      <div className=" h-[400px] text-white">
        <BarCharts height="400px" />
      </div>
    </section>
  );
}

export default BarChart;
