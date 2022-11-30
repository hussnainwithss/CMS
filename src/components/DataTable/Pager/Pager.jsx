import React from 'react';
import { Form, Pagination } from 'react-bootstrap';
import { PAGE_SIZES, generateOptionsFromList } from '../../../utils';

import styles from './pager.module.css';

const Pager = ({
    currentPage,
    totalPages = 10,
    setCurrentPage,
    getCanPrevPage,
    getCanNextPage,
    pageSize,
    setPageSize,
}) => {
    return (
        <Pagination className="d-flex align-items-center mb-0">
            <Pagination.First
                onClick={() => {
                    setCurrentPage(0);
                }}
                disabled={!getCanPrevPage()}
            />
            <Pagination.Prev
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                }}
                disabled={!getCanPrevPage()}
            />
            <Pagination.Next
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                }}
                disabled={!getCanNextPage()}
            />
            <Pagination.Last
                onClick={() => {
                    setCurrentPage(totalPages - 1);
                }}
                disabled={!getCanNextPage()}
            />
            <span className="ps-3">
                Page {currentPage + 1} of {totalPages}
            </span>
            <Form.Select
                size="sm"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                className={styles['select']}
            >
                {generateOptionsFromList(PAGE_SIZES, 'label', 'value')}
            </Form.Select>
        </Pagination>
    );
};

export default Pager;
