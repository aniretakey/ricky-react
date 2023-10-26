import React, { ChangeEvent, ReactElement, Ref, forwardRef, useState } from 'react';
import styles from './Input.module.css';
import { TypeValidator } from '../../models/models';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface IInputProps {
  placeholder: string;
  text: string;
  setValue: React.Dispatch<React.SetStateAction<string>> | ActionCreatorWithPayload<string, 'searchValues/setValue'>;
  type?: string;
  id?: string;
  validator?: TypeValidator | null;
  handleBlur?:  React.Dispatch<React.SetStateAction<boolean>>;
}

export const Input = forwardRef(
  (
    { placeholder, setValue, text, type, id, validator = (value): boolean => value.trim().length !== 0 }: IInputProps,
    ref: Ref<HTMLInputElement>,
  ): ReactElement => {
    const [error, setError] = useState<boolean>(false);

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
      if (validator !== null)
        setError(validator(event.target.value));
      else
        setError(true)
    };

    return (
      <input
        className={`${styles.input} ${!error && text.length > 0 ? styles.inputError : styles.inputCorrect} `}
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