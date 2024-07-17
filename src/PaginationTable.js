import React, { useMemo } from "react";
import "./Table.css";
import Tickets from "./tickets.json";
import { useTable, useSortBy, usePagination } from "react-table";
import { COLUMNS } from "./columns";

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Tickets, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    goToPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    useSortBy,
    usePagination
  );
  const { pageIndex, pageSize } = state;
  return (
    <>
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
          {page.map((row) => {
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
      <div>
        <span>
          Page {``}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {``}
        </span>
        <span>
          | goToPage:{``}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              goToPage(pageNumber);
            }}
            style={{ width: `50px` }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 17, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={() => goToPage(0)} disabled={!canPreviousPage}>
          {`<<`}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => goToPage(pageCount - 1)} disabled={!canNextPage}>
          {`>>`}
        </button>
      </div>
    </>
  );
};
