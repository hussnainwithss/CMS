import { createColumnHelper } from "@tanstack/react-table";
import { USERROLES } from "../../../../constants";

const columnHelper = createColumnHelper();

export const getColumns = ( onEdit, onDelete ) => {
  return [
  columnHelper.accessor("name", {
    header: () => <span>Full Name</span>,
    cell: (info) => info.getValue(),
    enableGlobalFilter: true,
    globalFilterFn: 'includesString',
  }),
  columnHelper.accessor("email", {
    header: () => <span>E-mail Address</span>,
    cell: (info) => info.getValue(),
    enableGlobalFilter: true,
    globalFilterFn: 'includesString',
  }),
  columnHelper.accessor("role", {
    header: () => <span>User Role</span>,
    cell: (info) => USERROLES[info.getValue()],
    enableGlobalFilter: true,
    globalFilterFn: 'includesString',
  }),
  {
    header: 'Actions' ,
    accessor: 'id',
  }
];
}

export const TableActions = ['edit', 'trash'];