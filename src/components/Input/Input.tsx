import { ImSearch } from 'react-icons/im';
import { ChangeEvent, useRef, useState } from 'react';

import styles from './Input.module.css';

export function Input() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState<string>('');
  // TODO сделать с помощью useDeferredValue (https://www.youtube.com/watch?v=jCGMedd6IWA&ab_channel=WebDevSimplified)
  const focus = () => {
    inputRef.current?.focus();
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div className={styles.inputHandler}>
      <input
        className={styles.input}
        ref={inputRef}
        maxLength={50}
        placeholder="Search..."
        value={text}
        onInput={handleInput}
      />
      <div className={styles.handlerSearchIcon}>
        <ImSearch className={styles.search} onClick={focus} />
      </div>
      {/* TODO сделать компонент dropdown category*/}
      <div className={styles.category}>Category</div>
    </div>
  );
}
