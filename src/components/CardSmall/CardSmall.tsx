/* eslint-disable max-lines-per-function */
import { ReactElement, useEffect, useState } from 'react';

import styles from './CardSmall.module.css';

import { CharacterType } from '../../models/card.model';
import { Button } from '../Button';
import { Like } from '../Like';
import { useNavigate } from "react-router-dom";

export const CardSmall = ({ image, name, id }: CharacterType): ReactElement => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('currentUser') ?? '[]');
    const { favourites } = data;
    if (favourites?.includes(id)) {
      setActive(true);
    }
  }, [id]);
  const handleDetailsClick = () => {
    navigate(`/search/character/${id}`)
  }

  const toggleLike = (): void => {
    setActive((prev) => !prev);

    const favouritesAllUsers = JSON.parse(localStorage.getItem('users') ?? '[]');
    const fav = JSON.parse(localStorage.getItem('users')!)[0];
    const favouritesFromAllUsers = fav.favourites;

    const favouritesForCurrUser = JSON.parse(localStorage.getItem('currentUser') ?? '[]');
    const { favourites } = favouritesForCurrUser;
    const unicFavorites = [...new Set(favourites)];
    if (!active) {
      unicFavorites?.push(id);

      localStorage.setItem('currentUser', JSON.stringify({ ...favouritesForCurrUser, favourites: unicFavorites }));
      console.log(fav.favourites);
      favouritesFromAllUsers?.push(id);

      localStorage.setItem('users', JSON.stringify({ ...favouritesAllUsers, favourites: favouritesFromAllUsers }));
    } else {
      const filteredFavourites = unicFavorites.filter((favId) => favId !== id);
      localStorage.setItem('currentUser', JSON.stringify({ ...favouritesForCurrUser, favourites: filteredFavourites }));
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
