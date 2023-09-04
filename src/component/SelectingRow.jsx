import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDefWithCheckBox } from "./Columns";
import { mockDataTeam } from "../component/mockData";

const BasicTable = () => {
  const finalData = React.useMemo(() => mockDataTeam, []);
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
      <table className="w-full text-[12px]  bg-slate-700  ">
        <thead className="bg-purple-700 text-white">
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id} className="text-center ">
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      className="py-2"
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
              <tr
                className="text-center border-y border-y-solid text-white "
                key={rowEl.id}
              >
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td className={`p-2 `} key={cellEl.id}>
                      <p
                        className={`rounded  ${
                          cellEl.column.id === "access" && "bg-green-700 "
                        }   `}
                      >
                        {flexRender(
                          cellEl.column.columnDef.cell,
                          cellEl.getContext()
                        )}
                      </p>
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
