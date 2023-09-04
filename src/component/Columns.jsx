import { createColumnHelper } from "@tanstack/react-table";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const columnHelper = createColumnHelper();

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Registrar ID",
    accessor: "registrarId",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Phone Number",
    accessor: "phone",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "City",
    accessor: "city",
  },
  {
    Header: "Zip Cod",
    accessor: "zipCode",
  },
];
export const columnDefWithCheckBox = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },

  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row) => `${row.name}`,
    header: "Name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "access",
    header: "Access",
  },
];
