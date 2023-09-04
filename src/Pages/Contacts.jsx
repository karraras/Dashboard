import Title1 from "../component/Title1";
import Table from "../component/Table";
function Contacts() {
  return (
    <section>
      <div className="my-4">
        <Title1 title="CONTACTS" text="List of Contacts for Future Reference" />
      </div>
      <Table />
    </section>
  );
}

export default Contacts;
