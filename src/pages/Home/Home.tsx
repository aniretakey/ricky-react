import { ReactElement, useState } from 'react';
import { createPortal } from 'react-dom';
import { Input } from '../../components/Input';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

export default function Home(): ReactElement {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div>
      <Input />
      <Button buttonText="Button" handleClick={(): void => console.log('click')} />
      <Button handleClick={(): void => setModal(true)} buttonText="Open modal" />
      {modal &&
        createPortal(
          <Modal onClose={() => setModal(false)}>
            <h1>Modal window</h1>
          </Modal>,
          document.body,
        )}
    </div>
  );
}
