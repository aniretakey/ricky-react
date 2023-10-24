import { ReactElement } from 'react';
import { Search } from '../../components/Search';
import { Welcome } from '../../components/Weclome';
import { useGetAllCharactersQuery } from '../../store/characters/characters.api.ts';
import { CardSmall } from '../../components/CardSmall';
import styles from './home.module.css';

export function Home(): ReactElement {
  const { data } = useGetAllCharactersQuery(null);
  return (
    <div>
      <Search />
      <Welcome />
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