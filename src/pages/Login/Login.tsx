import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useActions } from '../../hooks/useActions.ts';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import styles from './login.module.css';

export const Login = (): ReactElement => {
  const navigate = useNavigate();
  const [login, setLogin] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [userNotExist, setUserNotExist] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const existingUsers = useAppSelector((state) => state.auth.users);
  const { setCurrentUser } = useActions();

  useEffect(() => {
    setIsButtonActive(![login.trim().length > 0, password.trim().length > 6].every((item) => item));
  }, [password, login]);

  const showPasswordHandler = (): void => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const userExists = existingUsers.some((user) => user.login === login && user.password === password);
    const userErrPassword = existingUsers.some((user) => user.login === login && user.password !== password);

    if (userExists) {
      setCurrentUser({ login, password });
      setUserNotExist(false);
      navigate('/');
    } else if (userErrPassword) {
      setWrongPassword(true);
      setUserNotExist(false);
    } else {
      setUserNotExist(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      onChange={(): void => {
        setUserNotExist(false);
      }}
    >
      <h1>Log In</h1>
      <label className={styles.label} htmlFor="Login" aria-autocomplete="none">
        Login
      </label>
      <Input id="Login" placeholder="Enter Login" type="text" text={login} setValue={setLogin} />
      <label className={styles.label} htmlFor="Password">
        Password
      </label>
      <div className={styles.password}>
        <Input
          id="Password"
          placeholder="Enter Password"
          type={showPassword ? 'text' : 'password'}
          text={password}
          setValue={setPassword}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible className={styles.icon} onClick={showPasswordHandler} />
        ) : (
          <AiOutlineEye className={styles.icon} onClick={showPasswordHandler} />
        )}
      </div>
      {userNotExist && <p className={styles.warning}>User is not found. Please, sign up</p>}
      {wrongPassword && <p className={styles.warning}>Please, check your password</p>}
      <Button buttonText="Log In" type="submit" isButtonEnable={isButtonActive} />
      <span className={styles.message}>
        New here? <Link to="/signup">Register here.</Link>
      </span>
    </form>
  );
};
