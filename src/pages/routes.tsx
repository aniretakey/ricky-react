import { RouteObject } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';
import { SearchPage } from './SearchPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: (
      <Modal>
        <Register />
      </Modal>
    ),
  },
  {
    path: '/login',
    element: (
      <Modal>
        <Login />
      </Modal>
    ),
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
];

export default routes;