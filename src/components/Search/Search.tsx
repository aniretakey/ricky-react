import { ImSearch } from 'react-icons/im';
import { ReactElement, useRef, useState } from 'react';
import { Input } from "../Input";

import styles from './Search.module.css';

export function Search(): ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState<string>('');
  // TODO сделать с помощью useDeferredValue (https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified)
  const focus = (): void => {
    inputRef.current?.focus();
  };

  return (
    <div className={styles.inputHandler}>
      <Input ref={inputRef} placeholder="Search" text={text} setText={setText} />
      <div className={styles.handlerSearchIcon}>
        <ImSearch className={styles.search} onClick={focus} />
      </div>
      {/* TODO сделать компонент dropdown category */}
      <div className={styles.category}>Category</div>
    </div>
  );
}
