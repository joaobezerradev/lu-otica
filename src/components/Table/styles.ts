import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 400px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  thead tr {
    background-color: var(--black);
    color: var(--white);
    text-align: left;
    font-family: 'Airbnb Cereal App Bold', serif;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid var(--gray);

    &:nth-of-type(even) {
      background-color: var(--white);
    }
    &:last-of-type {
      border-bottom: 2px solid var(--black);
    }
  }
`;
