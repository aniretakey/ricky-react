import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Img } from "react-image";

import { useActions } from '../../hooks/useActions.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

import { Button } from '../Button';
import { Like } from '../Like';
import { Loader } from "../Loader";
import { CharacterType } from '../../models/card.model';

import styles from './CardSmall.module.css';

export const CardSmall = ({ image, name, id }: CharacterType): ReactElement => {
  const [active, setActive] = useState(false);
  const { toggleFavouritesForUser, setHistoryFromDetails } = useActions();
  const { currentUser } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.login) {
      if (currentUser.favourites?.includes(id)) {
        setActive(true);
      }
    } else {
      setActive(false);
    }
  }, [currentUser.login]);

  
  const handleDetailsClick = (): void => {
    setHistoryFromDetails(name!);
    navigate(`/search/character/${id}`);
  };

  const toggleLike = (): void => {
    if (currentUser?.login && currentUser.password) {
      setActive((prev) => !prev);
      toggleFavouritesForUser({ id });
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.like} onClick={toggleLike}>
        <Like active={active} />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.image}>
        <Img
          src={image}
          loader={<Loader />}
          unloader={<Loader />}
          loading='lazy'
          alt={name}
        />
      </div>
      <Button buttonText="Details" handleClick={handleDetailsClick} />
    </div>
  );
};
