import React from 'react';

import Header from '../../components/Header';
import Table from '../../components/Table';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Table />
    </Container>
  );
};

export default Home;
