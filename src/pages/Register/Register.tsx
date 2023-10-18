import { FormEvent, ReactElement, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import styles from './register.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from "react-router-dom";
import { TypeValidator } from "../../models/models.ts";

const Register = (): ReactElement => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mail, setMail] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const showPasswordHandler = (): void => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e: FormEvent): void => e.preventDefault();
  const emailValidation: TypeValidator = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(value);
  }
  
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Registration</h1>
      <label className={styles.label} htmlFor="Login">
        Login
      </label>
      <Input
        id="Login"
        placeholder="Enter Login"
        type="text"
        text={login}
        setText={setLogin}
      />

      <label className={styles.label} htmlFor='Email'>
        Email
      </label>
      <Input
        id='Email'
        placeholder={`Enter email`}
        text={mail}
        setText={setMail}
        type='email'
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
          setText={setPassword}
        />
        {showPassword ? (
          <AiOutlineEyeInvisible className={styles.icon} onClick={showPasswordHandler} />
        ) : (
          <AiOutlineEye className={styles.icon} onClick={showPasswordHandler} />
        )}
      </div>
      <Button buttonText="Sign Up" type="submit" />
      <span className={styles.message}>Already has and account? <Link to='/login'>Authorize  here.</Link></span>
    </form>
  );
};

export default Register;
