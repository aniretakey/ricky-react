import { RouteObject } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Modal } from '../components/Modal';
import { Login } from './Login';
import { Register } from './Register';
import { Home } from './Home';
import { SearchPage } from './SearchPage';
import { History } from './History';
import { Favourites } from './Favourites';
import { CardModal } from '../components/CardModal';
import { Error } from './Error';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'signup',
        element: createPortal(
          <Modal>
            <Register />
          </Modal>,
          document.body,
        ),
      },
      {
        path: 'login',
        element: createPortal(
          <Modal>
            <Login />
          </Modal>,
          document.body,
        ),
      },
    ],
  },
  {
    path: '/search',
    element: <SearchPage />,
    children: [{ path: 'character/:id', element: <CardModal /> }],
  },
  {
    path: '/history',
    element: <History />,
  },
  {
    path: '/favourites',
    element: <Favourites />,
  },
  {
    path: '*',
    element: <Error />,
  },
];

export default routes;
