import { MOCK_DATAmockDataContacts } from "./mockData";
import { FaFilter, FaSortDown } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useTable, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import { useMemo } from "react";
import { MdViewColumn, MdOutlineDensitySmall } from "react-icons/md";
import { LuImport } from "react-icons/lu";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import GlobalFilter from "./GlobalFilter";
import Density from "./Density";
import Export from "./Export";

function Table() {
  const [columnCh, setColumnCh] = useState(false);
  const [exp, setEx] = useState(false);
  const [den, setDen] = useState(5);
  const [density, setDensity] = useState(false);
  const [filters, setFilters] = useState("");
  const [inputV, setinputV] = useState(null);
  function MyToggle(e) {
    const [enabled, setEnabled] = useState(true);
    return (
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled(!enabled);
          e.toggleHidden(enabled);
        }}
        className={` ${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } relative inline-flex h-1 w-6 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-3" : "translate-x-0"
          } inline-block h-3 w-3 transform rounded-full bg-white transition`}
        />
      </Switch>
    );
  }

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATAmockDataContacts, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter
  );
  const { globalFilter } = state;
  return (
    <>
      <div className="text-[8px] flex gap-2 text-white pl-1 ">
        <div
          className="flex gap-1 items-center hover:bg-slate-400 py-1  select-none cursor-pointer rounded"
          onClick={() => {
            setColumnCh(!columnCh);
            setFilters(false);
            setDensity(false);
            setEx(false);
          }}
        >
          <MdViewColumn />
          <p>COLUMNS</p>
        </div>
        <div
          onClick={() => {
            setColumnCh(false);
            setFilters(!filters);
            setDensity(false);
            setEx(false);
          }}
          className="flex gap-1 items-center hover:bg-slate-400 py-1 select-none cursor-pointer rounded"
        >
          <FaFilter />
          <p>FILTERS</p>
        </div>
        <div
          onClick={() => {
            setDensity(!density);
            setColumnCh(false);
            setFilters(false);
            setEx(false);
          }}
          className="flex relative gap-1 items-center hover:bg-slate-400 py-1 select-none cursor-pointer rounded"
        >
          <MdOutlineDensitySmall />
          <p>DENSITY</p>
          <Density density={density} setDen={setDen} />
        </div>
        <div
          onClick={() => {
            setDensity(false);
            setEx(!exp);
            setColumnCh(false);
            setFilters(false);
          }}
          className=" relative flex gap-1 items-center hover:bg-slate-400 py-1 select-none cursor-pointer rounded"
        >
          <Export exp={exp} />
          <LuImport />
          <p>EXPORT</p>
        </div>
      </div>
      <div className={`h-[280px] overflow-y-scroll`}>
        <table {...getTableProps()} className="w-full select-none relative">
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                key={i}
                {...headerGroup.getHeaderGroupProps()}
                className="bg-purple-800 text-white  "
              >
                {headerGroup.headers.map((column, i) => (
                  <th
                    key={i}
                    {...column.getHeaderProps()}
                    className="text-center text-[8px] py-3"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <div
            className={`rounded  bg-slate-400 p-1  overflow-hidden top-[35px] absolute ${
              columnCh ? "block" : "hidden"
            }`}
          >
            <input
              value={inputV}
              onChange={(e) => setinputV(e.target.value.toLowerCase())}
              type="text"
              placeholder="Find column"
              className="placeholder:text-[8px] placeholder:text-black bg-transparent border-b border-slate-200 border-solid w-full text-[8px]  focus:outline-none   outline-none "
            />
            {allColumns.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`flex gap-1 items-center text-white text-[8px] ${
                    e?.Header?.toLowerCase().startsWith(inputV)
                      ? "block"
                      : "hidden"
                  } w-[200px] pl-2 `}
                >
                  <p className="h-6 flex items-center">{MyToggle(e)}</p>
                  <p>{e.Header}</p>
                </div>
              );
            })}
          </div>

          <div
            className={`rounded  bg-slate-400 p-1  overflow-hidden top-[35px] absolute ${
              filters ? "block" : "hidden"
            }`}
          >
            <GlobalFilter
              click={setFilters}
              filter={globalFilter}
              setFilter={setGlobalFilter}
            />
          </div>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className="hover:bg-slate-800 bg-slate-900"
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        style={{
                          paddingTop: `${den}px`,
                          paddingBottom: `${den}px`,
                        }}
                        key={i}
                        {...cell.getCellProps()}
                        className="text-[8px]  text-center  text-white "
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-purple-800 flex text-white py-3 justify-end px-1">
        <div className="text-[8px] flex gap-2 items-center ">
          <div className="flex gap-1">
            Rows per Page: <span>100</span>{" "}
            <div>{<FaSortDown size={10} />}</div>
          </div>
          <span>1-11 of 11</span>
          <div className="flex items-center">
            <BsChevronLeft size={8} />
            <BsChevronRight size={8} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
