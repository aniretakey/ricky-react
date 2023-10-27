/* eslint-disable max-lines-per-function */
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CharacterType } from '../../models/card.model';
import { Button } from '../Button';
import { Like } from '../Like';
import { useActions } from "../../hooks/useActions.ts";
import { useAppSelector } from "../../hooks/useAppSelector.ts";
import styles from './CardSmall.module.css';

export const CardSmall = ({ image, name, id }: CharacterType): ReactElement => {
  const [active, setActive] = useState(false);
  const { toggleFavouritesForUser } = useActions()
  const { currentUser } = useAppSelector(state => state.auth)
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser.login) {
      if (currentUser.favourites?.includes(id)) {
        setActive(true);
      }
    } else {
      setActive(false)
    }
  }, [currentUser.login]);
  const handleDetailsClick = (): void => {
    navigate(`/search/character/${id}`);
  };

  const toggleLike = (): void => {
    if (currentUser?.login && currentUser.password) {
      setActive((prev) => !prev);
      toggleFavouritesForUser({ id })


    } else {
      navigate('/login')
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.like} onClick={toggleLike}>
        <Like active={active} />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>
      <Button buttonText="Details" handleClick={handleDetailsClick} />
    </div>
  );
};