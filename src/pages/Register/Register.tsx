import { FormEvent, ReactElement, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './register.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Register = (): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const showPasswordHandler = (): void => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent): void => e.preventDefault();
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Registration</h1>
      <label className={styles.label} htmlFor="Login">
        Login
      </label>
      <Input id="Login" placeholder="Enter Login" type="text" text={login} setText={setLogin} />
      <label className={styles.label} htmlFor="Password">
        Password
      </label>
      <div className={styles.password}>
        <Input
          id="Password"
          placeholder="Enter Password"
          type={showPassword ? 'text' : 'password'}
          text={password}
          setText={setPassword}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible className={styles.icon} onClick={showPasswordHandler} />
        ) : (
          <AiOutlineEye className={styles.icon} onClick={showPasswordHandler} />
        )}
      </div>
      <Button buttonText="Sign Up" type="submit" />
    </form>
  );
};

export default Register;
