import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import styles from './CardModal.module.css';
import Modal from '../Modal/Modal';
import { CharacterType } from '../../models/card.model';

export const CardSmall = ({ image, name, gender, species, status, type }: CharacterType): ReactElement => {
  return createPortal(
    <Modal>
      <div className={styles.cardOpen}>
        <div className={styles.imageOpen}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.description}>
          <ul>
            {name && <li>{name}</li>}
            {gender && <li>{gender}</li>}
            {species && <li>{species}</li>}
            {status && <li>{status}</li>}
            {type && <li>{type}</li>}
          </ul>
        </div>
      </div>
    </Modal>,
    document.body,
  );
};
