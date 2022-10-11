import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { DebouncedInput } from "../../elements/Form";

import "./datatable.css";

const DataTable = ({ data, columns, dataType, actions, handler }) => {  
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      globalFilter,
    },
    globalFilterFn: "includesString",
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <Card className="mb-3">
      <Card.Footer className="bg-light">
        <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder={`Search ${dataType}`}
        />
      </Card.Footer>
      <Card.Body>
        <Table striped hover responsive>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 &&
              table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {cell.column.id === "Actions" &&
                        actions.map((action) => (
                          <span
                            id={action}
                            key={action}
                            onClick={(e) => handler(e, row.original)}
                            className={`fa fa-${action} ${action === 'edit' && 'color-grey'} ${action === 'trash' && 'color-red' } pe-1`}
                          />
                        ))}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
          {table.getRowModel().rows.length === 0 && (
            <tfoot>
              <tr>
                <td colSpan="100" align="center">
                  No {dataType} Found
                </td>
              </tr>
            </tfoot>
          )}
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DataTable;
