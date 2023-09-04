import Title1 from "../component/Title1";
import GeoChart from "../component/GeoChart";
function GeoCharts() {
  return (
    <section>
      <div className="my-4">
        <Title1 text="Simple Geography Chart" title="Geography" />
      </div>
      <div>
        <GeoChart height="400px" />
      </div>
    </section>
  );
}

export default GeoCharts;
