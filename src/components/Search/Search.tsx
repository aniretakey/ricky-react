import { ImSearch } from 'react-icons/im';
import { KeyboardEventHandler, MouseEventHandler, ReactElement, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Input';

import styles from './Search.module.css';
import { useActions } from '../../hooks/useActions.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

export function Search(): ReactElement {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const [text, setText] = useState<string>('');
  const { setHistory, setValue } = useActions();
  const { value } = useAppSelector((state) => state.searchValues);

  // TODO сделать с помощью useDeferredValue (https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified)
  const focus = (): void => {
    inputRef.current?.focus();
  };

  const handleEnter: KeyboardEventHandler = (event): void => {
    if (event.key === 'Enter' && inputRef.current?.value.trim().length !== 0) {
      setHistory();
      navigate(`/search/?name=${value}`);
    }
  };

  const handleClick: MouseEventHandler = (): void => {
    focus();
    if (inputRef.current?.value.trim().length !== 0) {
      setHistory();
      navigate(`/search/?name=${value}`);
    }
  };

  return (
    <div className={styles.inputHandler} onKeyDown={handleEnter}>
      <Input ref={inputRef} placeholder="Search" text={value} setValue={setValue} />
      <div className={styles.handlerSearchIcon}>
        <ImSearch className={styles.search} onClick={handleClick} />
      </div>
      {/* TODO сделать компонент dropdown category */}
      <div className={styles.category}>Category</div>
    </div>
  );
}