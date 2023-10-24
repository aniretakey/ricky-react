import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useAppSelector } from '../../hooks/useAppSelector.ts';
import { useActions } from '../../hooks/useActions.ts';

export function Navigation(): ReactElement {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.currentUser);
  const { setCurrentUser } = useActions();

  const handleSignUp = (): void => {
    navigate('/signup');
  };
  const handleLogin = (): void => {
    navigate('/login');
  };

  const handleLogout = (): void => {
    setCurrentUser('');
    navigate('/');
  };

  return (
    <nav>
      {currentUser.login ? (
        <>
          <Button buttonText="Favourites" handleClick={(): void => console.log('click')} />
          <Button buttonText="History" handleClick={(): void => navigate('/history')} />
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