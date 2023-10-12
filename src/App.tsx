import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import Header from './components/Header/Header';
import routes from './pages/routes';

import './App.css';

function App(): ReactElement {
  const routesElements = useRoutes(routes);
  return (
    <>
      <Header />
      {routesElements}
    </>
  );
}

export default App;
