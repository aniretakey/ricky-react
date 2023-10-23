import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useGetCharacterByIdQuery } from "../../store/characters/characters.api.ts";
import { Loader } from "../Loader";
import { Modal } from "../Modal";
import styles from './CardModal.module.css';

export const CardModal = (): ReactElement => {
  const { data, isLoading } = useGetCharacterByIdQuery(56)
  console.log(data)
  return createPortal(
    <Modal>
      {isLoading ?
        <Loader /> :
        (
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
      )}
    </Modal>,
    document.body,
  );
};
