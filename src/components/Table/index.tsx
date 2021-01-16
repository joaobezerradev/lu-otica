import React, { useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { TableContainer } from './styles';

type Data = {
  headers: string[];
  content: Array<{ userId: number; id: number; title: string; body: string }>;
};

type Pagination = {
  offset: number;
  tableData: Array<{ userId: number; id: number; title: string; body: string }>;
  tableDataPaginated: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
  perPage: number;
  currentPage: number;
  pageCount: number;
};

type Event = {
  selected: number;
};

const Table: React.FC<Data> = ({ headers, content }): JSX.Element => {
  const [pagination, setPagination] = useState<Pagination>({
    offset: 0,
    tableDataPaginated: [],
    perPage: 5,
    currentPage: 0,
    tableData: [],
    pageCount: 0,
  });

  useEffect(() => {
    const offset = 0;
    const perPage = 5;
    const tableDataPaginated = content.slice(offset, offset + perPage);
    const pageCount = Math.ceil(content.length / perPage);
    const tableData = content;

    const basePaginationConfig = {
      pageCount,
      tableDataPaginated,
      perPage,
      offset,
      currentPage: 0,
      tableData,
    };

    setPagination(basePaginationConfig);
  }, [content]);

  const handlePagination = useCallback(
    (event: Event) => {
      const { tableData, perPage } = pagination;

      const currentPage = event.selected;
      const offset = currentPage * perPage;

      const tableDataPaginated = tableData.slice(offset, offset + perPage);
      const pageCount = Math.ceil(tableData.length / perPage);

      setPagination({
        ...pagination,
        tableDataPaginated,
        pageCount,
        offset,
        currentPage,
      });
    },
    [pagination],
  );

  return (
    <>
      <TableContainer>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pagination.tableDataPaginated.map(item => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
      <ReactPaginate
        previousLabel="Anterior"
        nextLabel="Próxima"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        activeClassName="active"
        onPageChange={handlePagination}
      />
    </>
  );
};

export default Table;
