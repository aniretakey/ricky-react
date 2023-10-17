import { RouteObject } from 'react-router-dom';
import Home from './Home/Home';
import Modal from '../components/Modal/Modal';
import Register from './Register/Register';



const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: (
      <Modal >
        <Register />
      </Modal>
    ),
  },
];

export default routes;
