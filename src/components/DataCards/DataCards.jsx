import React, { useState } from 'react';
import { Card, CardGroup, Row, Col, ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    getPaginationRowModel,
} from '@tanstack/react-table';

import { DebouncedInput } from '../../elements/Form';
import placeHolderImg from '../../assets/img/placeholder.png';
import './dataCards.css';
import styles from './dataCards.module.css';
import { Pager } from './Pager';

const DataCards = ({
    data,
    columns,
    dataType,
    actions,
    handler,
    isPaginated = false,
    fieldsToShow = [],
    fieldsLabels = [],
    linkTo,
    toReplace,
}) => {
    const [globalFilter, setGlobalFilter] = useState('');
    const navigate = useNavigate();

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            globalFilter,
        },
        globalFilterFn: 'includesString',
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: isPaginated
            ? getPaginationRowModel()
            : undefined,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    });
    return (
        <Card className="mb-3">
            <Card.Footer
                className={`bg-light ${
                    isPaginated && 'd-flex justify-content-between flex-wrap'
                }`}
            >
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={(value) => setGlobalFilter(String(value))}
                    placeholder={`Search ${dataType}`}
                    isPaginated={isPaginated}
                />

                {isPaginated && (
                    <Pager
                        currentPage={table.getState().pagination.pageIndex}
                        setCurrentPage={table.setPageIndex}
                        totalPages={table.getPageCount()}
                        getCanNextPage={table.getCanNextPage}
                        getCanPrevPage={table.getCanPreviousPage}
                        pageSize={table.getState().pagination.pageSize}
                        setPageSize={table.setPageSize}
                    />
                )}
            </Card.Footer>
            <Card.Body>
                <Row xs={1} md={3} className="g-8">
                    {table.getRowModel().rows.length > 0 &&
                        table.getRowModel().rows.map((row) => (
                            <Col className={`mb-3`}>
                                <Card
                                    key={row.id}
                                    className={`h-100 ${styles['card-link']}`}
                                    onClick={() =>
                                        navigate(
                                            linkTo.replace(
                                                toReplace,
                                                row.original.id,
                                            ),
                                        )
                                    }
                                >
                                    <div className="d-flex justify-content-center mb-2 mt-2 h-100">
                                        <Card.Img
                                            variant="top"
                                            src={
                                                row.original.imageURL ||
                                                placeHolderImg
                                            }
                                            alt={row.original.englishName}
                                            className="w-25"
                                        />
                                    </div>
                                    <Card.Body className="bg-light pt-2 pb-auto">
                                        {fieldsToShow.map((f) => (
                                            <>
                                                <span>
                                                    <b>{fieldsLabels[f]}</b>
                                                    {': '}
                                                    {row.original[f]}
                                                </span>

                                                <br />
                                            </>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
                {table.getRowModel().rows.length === 0 && (
                    <span>No {dataType} Found</span>
                )}
            </Card.Body>
            <Card.Footer
                className={`bg-light ${
                    isPaginated && 'd-flex justify-content-between flex-wrap'
                }`}
            >
                Showing {table.getRowModel().rows.length} of{' '}
                {table.getPrePaginationRowModel().rows.length}
            </Card.Footer>
        </Card>
    );
};

export default DataCards;
