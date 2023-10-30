import { ReactElement } from 'react';
import { IButtonProps } from '../../models/models';

import styles from './Button.module.css';

export const Button = ({ buttonText, handleClick, fontSize = 18, type = 'button', isButtonEnable = false }: IButtonProps): ReactElement => {
  return (
    <button
      className={`${styles.button} ${isButtonEnable ? styles.buttonDisabled : ''}`}
      style={{ fontSize: `${fontSize}px` }}
      onClick={handleClick}
      type={type}
      disabled={isButtonEnable}
    >
      {buttonText}
    </button>
  )
};