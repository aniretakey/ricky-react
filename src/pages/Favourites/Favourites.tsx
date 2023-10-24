import { ReactElement } from 'react';
import styles from './favourites.module.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useGetCharacterByIdQuery } from '../../store/characters/characters.api';
import { CardSmall } from '../../components/CardSmall';

export const Favourites = (): ReactElement => {
  const favourites = useAppSelector((state) => state.auth.currentUser.favourites);
  const data = favourites.map((favourite) => useGetCharacterByIdQuery(favourite));
  const favouriteCards = data.map((item) => item.data);

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
