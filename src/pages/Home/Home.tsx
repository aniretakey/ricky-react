import { ReactElement, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Search } from '../../components/Search';
import { Welcome } from '../../components/Welcome';
import { CardSmall } from '../../components/CardSmall';

import { useLazyGetCharacterByPageQuery } from '../../store/characters/characters.api.ts';
import { CharacterType } from '../../models/card.model.ts';

import styles from './home.module.css';

export function Home(): ReactElement {
  const [fetchForPage] = useLazyGetCharacterByPageQuery();
  const [page, setPage] = useState<number>(1);
  const [allCards, setAllCards] = useState<CharacterType[]>([]);

  async function fetchData(pageNumber: number): Promise<void> {
    const response = await fetchForPage(pageNumber);
    const newData = response.data;

    setAllCards((prev) => {
      if (newData?.results) {
        return [...prev, ...newData.results];
      }
      return prev;
    });
  }

  function checkPosition(): void {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const threshold = height - scrolled - screenHeight;
    if (threshold < 10) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchData(nextPage);
        return nextPage;
      });
    }
  }

  useEffect(() => {
    fetchData(page);

    window.addEventListener('scroll', checkPosition);

    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <div>
      <Search />
      <Welcome />
      <div className={styles.cards}>
        {allCards.map((item) => (
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
      <Outlet />
    </div>
  );
}
