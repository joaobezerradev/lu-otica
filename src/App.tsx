import React from 'react';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <>
    <Home />
    <GlobalStyles />
  </>
);

export default App;
