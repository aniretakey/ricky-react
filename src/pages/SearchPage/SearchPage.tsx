import { ReactElement } from 'react';
import { Search } from '../../components/Search';
import styles from './SearchPage.module.css';
import { useGetAllCharactersQuery } from '../../store/characters/characters.api.ts';
import { CardSmall } from '../../components/CardSmall';

export function SearchPage(): ReactElement {
  const { data } = useGetAllCharactersQuery(null);

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
