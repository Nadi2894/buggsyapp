import React, { useMemo } from "react";
import "./Table.css";
import Tickets from "./tickets.json";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./columns";

export const SortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Tickets, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <table className="my-table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render(`header`)}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? `⬇️ `
                      : ` ⬆️ `
                    : ``}
                </span>
              </th>
            ))}
          </tr>
        ))}{" "}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
