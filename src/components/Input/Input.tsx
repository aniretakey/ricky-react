import React, { ChangeEvent, ReactElement, Ref, forwardRef, useState } from 'react';
import styles from './Input.module.css';
import { TypeValidator } from '../../models/models';

interface IInputProps {
  placeholder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  id?: string;
  validator?: TypeValidator;
}

const Input = forwardRef(
  (
    { placeholder, setText, text, type, id, validator = (value): boolean=> value.trim().length === 0 }: IInputProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    const [error, setError] = useState<boolean>(false);



    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
      setText(event.target.value);
      if (validator) {
        setError(validator(event.target.value));
      }
    };

    return (
      <input
        className={`${styles.input} ${error && styles.error} `}
        maxLength={50}
        placeholder={placeholder}
        value={text}
        onInput={handleInput}
        ref={ref}
        type={type}
        id={id}
      />
    );
  },
);

export default Input;
