import { ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { Search } from '../../components/Search';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Register from '../Register/Register';

export default function Home(): ReactElement {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
      <Search />
      <Button buttonText="Button" handleClick={(): void => console.log('click')} />
      <Button handleClick={(): void => setModal(true)} buttonText="Open modal" />
      {modal &&
        createPortal(
          <Modal onClose={(): void => setModal(false) }>
            <Register />
          </Modal>,
          document.body,
        )}
    </div>
  );
}
