/* eslint-disable max-lines-per-function */
import { ImSearch } from 'react-icons/im';
import { KeyboardEventHandler, MouseEventHandler, ReactElement, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';

import styles from './Search.module.css';
import { useActions } from '../../hooks/useActions.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useDebounce } from '../../hooks/debounce.ts';
import { useGetCharacterByNameQuery } from '../../store/characters/characters.api.ts';
import { CharacterType } from '../../models/card.model.ts';

export function Search(): ReactElement {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setHistory, setValue } = useActions();
  const { value } = useAppSelector((state) => state.searchValues);

  const debounced = useDebounce(value);
  const [dropdown, setDropdown] = useState(false);
  const { data } = useGetCharacterByNameQuery(debounced, { skip: debounced.length < 3 });

  useEffect(() => {
    setDropdown(debounced.length >= 3 && data?.results.length! > 0);
  }, [debounced, data?.results]);

  // TODO сделать с помощью useDeferredValue (https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified)
  const focus = (): void => {
    inputRef.current?.focus();
  };
  const handleSearch = (): void => {
    setHistory();
    navigate(`/search/?name=${value}`);
  };

  const handleEnter: KeyboardEventHandler = (event): void => {
    if (event.key === 'Enter' && inputRef.current?.value.trim().length !== 0) {
      handleSearch();
    }
  };

  const handleClick: MouseEventHandler = (): void => {
    focus();
    if (inputRef.current?.value.trim().length !== 0) {
      handleSearch();
    }
  };

  return (
    <div className={styles.inputHandler} onKeyDown={handleEnter}>
      <Input ref={inputRef} placeholder="Search" text={value} setValue={setValue} />
      {dropdown && (
        <ul className={styles.suggestList}>
          {data?.results?.map((el: CharacterType) => (
            <li className={styles.suggestItem} key={el.id}>
              {el.name}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.handlerSearchIcon}>
        <ImSearch className={styles.search} onClick={handleClick} />
      </div>
    </div>
  );
}