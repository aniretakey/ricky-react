import { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGetCharacterByIdQuery } from "../../store/characters/characters.api.ts";
import { useNavigate, useParams } from "react-router-dom";
import { Modal } from "../Modal";
import styles from './CardModal.module.css';
import { Loader } from "../Loader";

export const CardModal = (): ReactElement => {
  const { id } = useParams()
  const { data, isLoading } = useGetCharacterByIdQuery(Number(id))
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return function (){
      document.body.style.overflow = 'auto'
    }
  }, []);

  const handleClose = () => {
    navigate('/search')
  }
  return createPortal(
    <Modal onClose={handleClose}>
      {isLoading && <Loader />}
      <div className={styles.cardOpen}>
        <div className={styles.imageOpen}>
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className={styles.description}>
          <ul>
            {data?.name && <li>Name: {data.name}</li>}
            {data?.gender && <li>Gander: {data.gender}</li>}
            {data?.species && <li>Species: {data.species}</li>}
            {data?.status && <li>Status: {data.status}</li>}
            {data?.type && <li>Type: {data.type}</li>}
          </ul>
        </div>
      </div>
    </Modal>,
    document.body,
  );
};
