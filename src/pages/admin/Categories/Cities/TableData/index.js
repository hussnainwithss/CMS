import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const getColumns = (onEdit, onDelete) => {
    return [
        columnHelper.accessor('englishName', {
            header: () => <span>English Name</span>,
            cell: (info) => info.getValue(),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('arabicName', {
            header: () => <span>Arabic Name</span>,
            cell: (info) => info.getValue(),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('region', {
            header: () => <span>Region</span>,
            cell: (info) => info.getValue(),
            accessorFn: (originalRow) => originalRow.region.englishName,
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('isActive', {
            header: () => <span>Is Active</span>,
            cell: (info) => info.getValue().toString(),
            enableGlobalFilter: true,
            accessorFn: (originalRow) => originalRow.isActive.toString(),
            globalFilterFn: 'includesString',
        }),
       {
            header: 'Actions',
            accessor: 'id',
        },
    ];
};

export const TableActions = ['edit', 'trash'];
