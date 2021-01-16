import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';

import { Container } from './styles';

type ContentTest = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home: React.FC = () => {
  const [data, setData] = useState<ContentTest[]>([]);

  useEffect(() => {
    api
      .get<ContentTest[]>('/posts')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const headers = ['UserID', 'Id', 'Title', 'Body'];

  return (
    <Container>
      <Header />
      <Table headers={headers} content={data} />
    </Container>
  );
};

export default Home;
