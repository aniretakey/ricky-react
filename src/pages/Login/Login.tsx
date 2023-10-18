import { FormEvent, ReactElement, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";

const Login = (): ReactElement => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const showPasswordHandler = (): void => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent): void => e.preventDefault();
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Log In</h1>
      <label className={styles.label} htmlFor="Login" aria-autocomplete='none'>
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
      <Button buttonText="Log In" type="submit" />
      <span className={styles.message}>New here? <Link to='/signup'>Register here.</Link></span>
    </form>
  );
};

export default Login;
