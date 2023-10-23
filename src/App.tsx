import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './pages/routes';

import './App.css';
import { Header } from "./components/Header";

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
