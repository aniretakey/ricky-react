import { ReactElement } from 'react';
import styles from './Button.module.css';

interface IButtonProps {
  buttonText: string;
  handleClick: () => void;
}
const Button = ({ buttonText, handleClick }: IButtonProps): ReactElement => (
  <button className={styles.button} onClick={handleClick}>
    {buttonText}
  </button>
);

export default Button;
