import { ReactElement } from 'react';
import styles from './Button.module.css';
import { IButtonProps } from '../../models/models';

const Button = ({ buttonText, handleClick, fontSize = 18, type = 'button' }: IButtonProps): ReactElement => (
  <button className={styles.button} style={{ fontSize: `${fontSize}px` }} onClick={handleClick} type={type}>
    {buttonText}
  </button>
);

export default Button;
