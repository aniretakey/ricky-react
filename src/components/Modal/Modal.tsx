import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import styles from './Modal.module.css';

interface ModalProps {
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps): ReactElement {
  const navigate = useNavigate();
  const handleClose = ():void => {
    
    navigate('/');
  };

  return (
    <div className={styles.modalBackground} onClick={onClose ?? handleClose}>
      <div
        className={styles.content}
        onClick={(e): void => {
          e.stopPropagation();
        }}
      >
        <GrClose onClick={onClose ?? handleClose} className={styles.closeIcon} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
