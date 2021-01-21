import React from 'react';
import { FiClipboard, FiFolder, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, Navigation, Clickable } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={logoImg} alt="Logo" />

    <Navigation>
      <Clickable startIcon={<FiUser size={16} />}>Clientes</Clickable>
      <Clickable startIcon={<FiFolder size={16} />}>Estoque</Clickable>
      <Clickable startIcon={<FiClipboard size={16} />}>Relatório</Clickable>
    </Navigation>
  </Container>
);

export default Header;
