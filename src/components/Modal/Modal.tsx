import React, { ReactElement } from 'react';

import { GrClose } from 'react-icons/gr';
import styles from './Modal.module.css';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps): ReactElement {
  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div
        className={styles.content}
        onClick={(e): void => {
          e.stopPropagation();
        }}
      >
        <GrClose onClick={onClose} className={styles.closeIcon} />
        {children}
      </div>
    </div>
  );
}

export default Modal;
