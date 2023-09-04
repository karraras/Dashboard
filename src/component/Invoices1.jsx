import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDefWithCheckBox } from "./Columns";
import { mockDataInvoices } from "./mockData";

const BasicTable = () => {
  const finalData = React.useMemo(() => mockDataInvoices, []);
  const finalColumnDef = React.useMemo(() => columnDefWithCheckBox, []);

  const [rowSelection, setRowSelection] = React.useState({});

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection: rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <>
      <table className="w-full border-collapse bg-slate-700 text-white">
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      className="text-left  p-2"
                      key={columnEl.id}
                      colSpan={columnEl.colSpan}
                    >
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td className="text-left  p-2" key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BasicTable;
