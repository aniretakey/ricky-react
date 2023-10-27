import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../store/characters/characters.api.ts';

import { Modal } from '../Modal';
import { Loader } from '../Loader';

import styles from './CardModal.module.css';

export const CardModal = (): ReactElement => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterByIdQuery(Number(id));
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return function () {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = ():void => {
    navigate('/search');
  }
  return createPortal(
    <Modal onClose={handleClose}>
      {isLoading
       ? 
       (<div className={styles.loader}><Loader /></div>)
      : 
      ( <div className={styles.cardOpen}>
        <div className={styles.imageOpen}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className={styles.description}>
          <ul>
            {data?.name && <li><b>Name:</b> {data.name}</li>}
            {data?.gender && <li><b>Gender:</b> {data.gender}</li>}
            {data?.species && <li><b>Species:</b> {data.species}</li>}
            {data?.status && <li><b>Status:</b> {data.status}</li>}
            {data?.type && <li><b>Type:</b> {data.type}</li>}
            {data?.location?.name && <li><b>Location:</b> {data.location.name}</li>}
          </ul>
        </div>
      </div>)}
     
    </Modal>,
    document.body,
  );
};
