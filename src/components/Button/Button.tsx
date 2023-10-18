import { ReactElement } from 'react';
import styles from './Button.module.css';
import { IButtonProps } from '../../models/models';

const Button = ({ buttonText, handleClick, fontSize = 18, type = 'button', isButtonEnable }: IButtonProps): ReactElement => {
  console.log(isButtonEnable)
  return (
    <button
      className={`${styles.button} ${!isButtonEnable && styles.buttonDisabled}`}
      style={{ fontSize: `${fontSize}px` }}
      onClick={handleClick}
      type={type}
      disabled={isButtonEnable && false}
    >
      {buttonText}
    </button>
  )
};

export default Button;
