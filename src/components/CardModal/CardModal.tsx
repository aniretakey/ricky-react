import { ReactElement } from 'react';
import { useGetCharacterByIdQuery } from "../../store/characters/characters.api.ts";
import { createPortal } from 'react-dom';
import { Modal } from "../Modal";
import styles from './CardModal.module.css';

export const CardModal = (): ReactElement => {
  const { data } = useGetCharacterByIdQuery(635)

  return createPortal(
    <Modal>
        <div className={styles.cardOpen}>
        <div className={styles.imageOpen}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className={styles.description}>
          <ul>
            {data?.name && <li>{data.name}</li>}
            {data?.gender && <li>{data.gender}</li>}
            {data?.species && <li>{data.species}</li>}
            {data?.status && <li>{data.status}</li>}
            {data?.type && <li>{data.type}</li>}
          </ul>
        </div>
      </div>
    </Modal>,
    document.body,
  );
};
