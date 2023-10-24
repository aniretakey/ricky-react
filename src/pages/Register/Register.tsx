/* eslint-disable max-lines-per-function */
/* eslint-disable no-use-before-define */
import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import styles from './register.module.css';

import { TypeValidator } from '../../models/models.ts';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useActions } from '../../hooks/useActions.ts';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

export const Register = (): ReactElement => {
  const navigate = useNavigate();
  const { addUser } = useActions();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [existingUser, setExistingUser] = useState<boolean>(false);

  const [isButtonActive, setButtonActive] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const existingUsers = useAppSelector((state) => state.auth.users);

  useEffect(() => {
    setButtonActive(
      [login.trim().length !== 0, passwordValidation(password), emailValidation(mail)].every((item) => item),
    );
  }, [login, password, mail]);

  const showPasswordHandler = (): void => {
    setShowPassword((prev) => !prev);
  };
  const emailValidation: TypeValidator = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(value);
  };
  const passwordValidation: TypeValidator = (value) => value.trim().length > 6;
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (existingUsers.some((user) => user.login === login)) {
      setExistingUser(true);
      return;
    }
    addUser({ login, password });
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      onChange={(): void => {
        setExistingUser(false);
      }}
    >
      <h1>Registration</h1>

      <label className={styles.label} htmlFor="Login">
        Login
      </label>
      <Input id="Login" placeholder="Enter Login" type="text" text={login} setValue={setLogin} />

      <label className={styles.label} htmlFor="Email">
        Email
      </label>
      <Input
        id="Email"
        placeholder="Enter email"
        text={mail}
        setValue={setMail}
        type="email"
        validator={emailValidation}
      />

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
          validator={passwordValidation}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible className={styles.icon} onClick={showPasswordHandler} />
        ) : (
          <AiOutlineEye className={styles.icon} onClick={showPasswordHandler} />
        )}
      </div>
      {existingUser && <p className={styles.warning}>This user is already exists</p>}
      <Button buttonText="Sign Up" type="submit" isButtonEnable={!isButtonActive} />
      <span className={styles.message}>
        Already has and account? <Link to="/login">Authorize here.</Link>
      </span>
    </form>
  );
};