import { createColumnHelper } from '@tanstack/react-table';
import { Form, Badge, Row, Col } from 'react-bootstrap';
import { USERROLES } from '../../../../constants';
import { SwitchField } from '../../../../elements/Form';

const columnHelper = createColumnHelper();

const sampleSurveyTypes = [
    'default survey',
    'education survey 1',
    'education survey 2',
    'education survey 3',

    // 'healthcare survey 1',
    // 'healthcare survey 2',
    // 'healthcare survey 3',
];



export const getColumns = (channels, setChannel) => {
    return [
        columnHelper.accessor('arabicName', {
            header: () => <span>Arabic Name</span>,
            cell: (info) => info.getValue(),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('englishName', {
            header: () => <span>English Name</span>,
            cell: (info) => info.getValue(),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('channelCategory', {
            header: () => <span>Channel Category</span>,
            cell: (info) =>
                info.getValue().map((val) => (
                    // <Col md={4} className=''>
                    <Badge bg="dark" className="me-1">
                        {val}
                    </Badge>
                    // </Col>
                )),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),

        columnHelper.accessor('channelType', {
            header: () => <span>Channel Type</span>,
            cell: (info) =>
                info.getValue().map((val) => (
                    <Badge bg="success" className="me-1">
                        {val}
                    </Badge>
                )),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('Survey', {
            header: () => <span>Survey</span>,
            cell: (info) => (
                <Form.Select className="w-auto">
                    {sampleSurveyTypes.map((survey) => (
                        <option value={survey}>{survey}</option>
                    ))}
                </Form.Select>
            ),
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
        columnHelper.accessor('isActive', {
            header: () => <span>Is Active</span>,
            cell: (info) => {
                let isActive = info.getValue();
                return (
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        // checked={!!isActive}
                        // onChange={(e) => {
                        //     setChannel([
                        //         ...channels.map((channel) =>
                        //             channel.id === info.row.original.id
                        //                 ? {
                        //                       ...channel,
                        //                       isActive:
                        //                           !info.row.original.isActive,
                        //                   }
                        //                 : { ...channel },
                        //         ),
                        //     ]);
                        // }}
                        // className=""
                    />
                );
            },
            enableGlobalFilter: true,
            globalFilterFn: 'includesString',
        }),
    ];
};

export const TableActions = ['edit', 'trash'];

export const SampleData = [
    {
        arabicName: 'Education Sector',
        englishName: 'Education Sector',
    },
];
