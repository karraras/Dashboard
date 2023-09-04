import Title1 from "../component/Title1";
import SelectingRow from "../component/SelectingRow";
function Invoices() {
  return (
    <section>
      <div className="my-4">
        <Title1 title="INVOICES" text="List of Invoice Balances" />
      </div>
      <SelectingRow />
    </section>
  );
}

export default Invoices;
