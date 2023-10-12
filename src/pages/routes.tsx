import { RouteObject } from 'react-router-dom';
import Home from './Home/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;
