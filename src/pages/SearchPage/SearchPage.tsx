import { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from '../../components/Search';
import styles from './SearchPage.module.css';
import { useGetCharacterByNameQuery } from '../../store/characters/characters.api.ts';
import { CardSmall } from '../../components/CardSmall';

export function SearchPage(): ReactElement {
  const location = useLocation();
  const searchName = new URLSearchParams(location.search);
  const name = searchName.get('name');

  const { data } = useGetCharacterByNameQuery(name ?? '');

  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.cards}>
        {data?.results.map((item) => (
          <CardSmall
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            type={item.type}
            gender={item.gender}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}