import { ReactElement, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Search } from '../../components/Search';
import { CardSmall } from '../../components/CardSmall';

import { useLazyGetCharacterByNameQuery } from '../../store/characters/characters.api.ts';
import { CharacterType } from "../../models/card.model.ts";

import styles from './SearchPage.module.css';

export function SearchPage(): ReactElement {
  const location = useLocation();
  const [page, setPage] = useState<number>(1)
  const [cards, setCards] = useState<CharacterType[]>([]);
  const [getLazyCharacterByName] = useLazyGetCharacterByNameQuery()
  const searchName = new URLSearchParams(location.search);
  const name = searchName.get('name');

  const fetchData = async (query: string, page: number): Promise<void> => {
    const response = await getLazyCharacterByName({ name: query, page: String(page) })

    setCards(prevState => {
      if (response?.data?.results)
        return [...prevState, ...response.data.results]
      else
        return prevState
    })
  }

  const checkPosition = (): void => {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;

    const threshold = height - scrolled - screenHeight;
    if (threshold < 10) {
      setPage((prevPage) => {
        fetchData(name ?? '', prevPage + 1);
        return prevPage + 1;
      });
    }
  }

  useEffect(() => {
    setCards([])
    fetchData(name??'', page)
    window.addEventListener('scroll', checkPosition)
    return () => {
      window.removeEventListener('scroll', checkPosition)
    }
  }, [name]);

  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.cards}>
        {cards?.map((item) => (
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
