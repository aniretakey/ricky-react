/* eslint-disable max-lines-per-function */
import { KeyboardEventHandler, MouseEventHandler, ReactElement, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions.ts';
import { ImSearch } from 'react-icons/im';

import { useGetCharacterByNameQuery } from '../../store/characters/characters.api.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useDebounce } from '../../hooks/debounce.ts';
import { Input } from '../Input';
import { CharacterType } from '../../models/card.model.ts';

import styles from './Search.module.css';

export function Search(): ReactElement {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setHistory, setValue } = useActions();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { value } = useAppSelector((state) => state.searchValues);
  const debounced = useDebounce(value);
  const { data, isError } = useGetCharacterByNameQuery(debounced, { skip: debounced.length < 3 });

  useEffect(() => {
    setDropdown(debounced.length >= 3 && data?.results.length! > 0);
  }, [debounced, data?.results]);

  // TODO сделать с помощью useDeferredValue (https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified)
  const focus = (): void => {
    inputRef.current?.focus();
  };
  const handleSearch = (name?: string): void => {
    if (isError)
      return;
    if (name)
      setValue(name)
    navigate(`/search/?name=${name ?? value}`);
    setHistory();
    setValue('')
    focus()
  };

  const handleEnter: KeyboardEventHandler = (event): void => {
    if (event.key === 'Enter' && inputRef.current?.value.trim().length !== 0) {
      handleSearch();
    }
  };

  const handleClick: MouseEventHandler = (): void => {
    focus();
    // setDropdown(debounced.length >= 3 && data?.results.length! > 0);
    if (inputRef.current?.value.trim().length !== 0) {
      handleSearch();
    }
  };

  return (
    <div className={styles.inputHandler} onKeyDown={handleEnter}>
      <Input ref={inputRef} placeholder="Search" text={value} setValue={setValue} validator={null} />
      {dropdown && (
        <ul className={styles.suggestList}>
          {isError ? (
            <li className={styles.suggestItem}>Character is not found</li>
          ) : (
            data?.results?.map((el: CharacterType) => (
              <li className={styles.suggestItem} key={el.id} onClick={(): void => handleSearch(el.name)}>
                {el.name}
              </li>
            ))
          )}
        </ul>
      )}
      <div className={styles.handlerSearchIcon}>
        <ImSearch className={styles.search} onClick={handleClick} />
      </div>
    </div>
  );
}