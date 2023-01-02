import { createColumnHelper } from '@tanstack/react-table';
import { USERROLES } from '../../../../constants';

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
        // columnHelper.accessor('Logo', {
        //     header: () => <span>Logo</span>,
        //     cell: (info) => USERROLES[info.getValue()],
        //     enableGlobalFilter: true,
        //     globalFilterFn: 'includesString',
        // }),
        // columnHelper.accessor('isActive', {
        //     header: () => <span>Logo</span>,
        //     cell: (info) => USERROLES[info.getValue()],
        //     enableGlobalFilter: true,
        //     globalFilterFn: 'includesString',
        // }),
    ];
};

export const TableActions = ['edit', 'trash'];
