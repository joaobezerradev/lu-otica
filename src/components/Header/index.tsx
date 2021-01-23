import React from 'react';
import { PersonOutline, Storage, AssessmentOutlined } from '@material-ui/icons';

import logoImg from '../../assets/logo.png';

import { Container, Navigation, Clickable } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />

      <Navigation>
        <Clickable startIcon={<PersonOutline />}>Clientes</Clickable>
        <Clickable startIcon={<Storage />}>Estoque</Clickable>
        <Clickable startIcon={<AssessmentOutlined />}>Relatório</Clickable>
      </Navigation>
    </Container>
  );
};
export default Header;
