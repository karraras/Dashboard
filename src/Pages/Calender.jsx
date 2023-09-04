import Calendar from "../component/Calendar";

import Title1 from "../component/Title1";
function Calender() {
  return (
    <section className=" h-4/5">
      <div className="py-4">
        <Title1 text="Full Calendar Interactive Page" title="Calendar" />
      </div>
      <Calendar />
    </section>
  );
}

export default Calender;
