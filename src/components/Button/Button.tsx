import { ReactElement } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
  buttonText: string;
  handleClick: () => void;
  fontSize?: number;
}
const Button = ({ buttonText, handleClick, fontSize = 18 }: IButtonProps): ReactElement => (
  <button className={styles.button} style={{ fontSize: `${fontSize}px` }} onClick={handleClick}>
    {buttonText}
  </button>
);

export default Button;
