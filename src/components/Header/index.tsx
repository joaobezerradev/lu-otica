import React from 'react';
import { FiClipboard, FiFolder, FiSearch, FiUser } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, InputSearch, Navigation } from './styles';

const Header: React.FC = () => (
  <Container>
    <img src={logoImg} alt="Logo" />

    <InputSearch>
      <FiSearch size={16} />
      <input
        className="search-input"
        type="text"
        placeholder="Buscar cliente"
      />
    </InputSearch>

    <Navigation>
      <div>
        <FiUser />
        <span>Clientes</span>
      </div>
      <div>
        <FiFolder />
        <span>Estoque</span>
      </div>
      <div>
        <FiClipboard />
        <span>Relatório</span>
      </div>
    </Navigation>
  </Container>
);

export default Header;
