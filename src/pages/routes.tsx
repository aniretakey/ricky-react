import { RouteObject } from 'react-router-dom';
import Home from './Home/Home';
import Modal from '../components/Modal/Modal';
import Register from './Register/Register';
import Login from "./Login/Login.tsx";



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
  {
    path: '/login',
    element: (
      <Modal >
        <Login />
      </Modal>
    ),
  },
];

export default routes;
