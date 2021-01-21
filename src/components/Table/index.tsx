import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

import { Container } from './styles';

const tableIcons = {
  Add: forwardRef<SVGSVGElement>((props, ref) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef<SVGSVGElement>((props, ref) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef<SVGSVGElement>((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef<SVGSVGElement>((props, ref) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef<SVGSVGElement>((props, ref) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef<SVGSVGElement>((props, ref) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef<SVGSVGElement>((props, ref) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef<SVGSVGElement>((props, ref) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef<SVGSVGElement>((props, ref) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef<SVGSVGElement>((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef<SVGSVGElement>((props, ref) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef<SVGSVGElement>((props, ref) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef<SVGSVGElement>((props, ref) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef<SVGSVGElement>((props, ref) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

const Table: React.FC = () => {
  const columns = [
    {
      title: 'Nome',
      field: 'nome',
    },
    {
      title: 'Email',
      field: 'email',
    },
    {
      title: 'Idade',
      field: 'idade',
    },

    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
    {
      title: 'Genero',
      field: 'genero',
    },
  ];

  const data = [
    { nome: 'John', email: 'john@gmail.com', idade: 12, genero: 'Male' },
    { nome: 'Bren', email: 'bren@gmail.com', idade: 24, genero: 'Male' },
    { nome: 'Marry', email: 'marry@gmail.com', idade: 18, genero: 'Female' },
    { nome: 'Shohail', email: 'shohail@gmail.com', idade: 25, genero: 'Male' },
    { nome: 'Aseka', email: 'aseka@gmail.com', idade: 19, genero: 'Female' },
    { nome: 'Meuko', email: 'meuko@gmail.com', idade: 12, genero: 'Female' },
  ];

  return (
    <Container>
      <MaterialTable
        icons={tableIcons}
        title="Clientes"
        data={data}
        columns={columns}
        options={{
          search: true,
          paging: true,
          pageSize: 5,
          pageSizeOptions: [5],
        }}
        localization={{
          toolbar: {
            searchPlaceholder: 'Buscar cliente',
          },
          pagination: {
            labelRowsSelect: 'linhas',
            firstTooltip: 'Primeira página',
            previousTooltip: 'Página anterior',
            nextTooltip: 'Próxima página',
            lastTooltip: 'Ultima página',
            labelDisplayedRows: '{from}-{to} de {count}',
          },
        }}
      />
    </Container>
  );
};

export default Table;
