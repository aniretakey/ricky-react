import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';

import { Button } from '../Button';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useActions } from '../../hooks/useActions.ts';
import styles from './navigation.module.css';

export function Navigation(): ReactElement {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const { logoutUser } = useActions();

  const handleSignUp = (): void => {
    navigate('/signup');
  };
  const handleLogin = (): void => {
    navigate('/login');
  };

  const handleLogout = (): void => {
    logoutUser();
    navigate('/');
  };

  const handleFavourites = (): void => {
    navigate('/favourites');
  };

  return (
    <nav className={styles.nav}>
      {currentUser.login ? (
        <>
          <Button buttonText="Favourites" handleClick={handleFavourites} />
          <Button buttonText="History" handleClick={(): void => navigate('/history')} />
          <div className={styles.user}>
            <BiSolidUserCircle className={styles.userIcon} />
            <p className={styles.userName}>{currentUser.login}</p>
          </div>
          <Button buttonText="Log out" handleClick={handleLogout} />
        </>
      ) : (
        <>
          <Button buttonText="Log in" handleClick={handleLogin} />
          <Button buttonText="Sign up" handleClick={handleSignUp} />
        </>
      )}
    </nav>
  );
}