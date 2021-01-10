import React from 'react';

import { Container, Header, Body, Footer } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <Header>
      <h1>Header</h1>
    </Header>

    <Body>
      <h2>Body</h2>
    </Body>

    <Footer>
      <h3>Footer</h3>
    </Footer>
  </Container>
);

export default Sidebar;
