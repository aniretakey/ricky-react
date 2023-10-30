import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardSmall } from '../../components/CardSmall';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetCharacterByIdQuery } from '../../store/characters/characters.api';

import styles from './favourites.module.css';

export const Favourites = (): ReactElement => {
  const favourites = useAppSelector((state) => state.auth.currentUser.favourites);
  const data = favourites.map((favourite) => useGetCharacterByIdQuery(favourite));
  const favouriteCards = data.map((item) => item.data);
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser.login === '') {
      navigate('/login');
    }
  }, []);

  return (
    <div className={styles.favourites}>
      <h3 className={styles.title}>Favourites</h3>
      <div className={styles.list}>
        {favouriteCards?.map((item) =>
          item ? (
            <CardSmall
              id={item.id}
              key={item.id}
              name={item.name}
              status={item.status}
              species={item.species}
              type={item.type}
              gender={item.gender}
              image={item.image}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};
