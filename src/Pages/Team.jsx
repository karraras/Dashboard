import Title1 from "../component/Title1";
import SelectingRow from "../component/SelectingRow";

function Team() {
  return (
    <section className="text-white mt-3">
      <Title1 title="TEAM" text="Managing the Team Members" />

      <div className="bg-slate-700 mt-4 pb-16">
        <SelectingRow />
      </div>
    </section>
  );
}

export default Team;
