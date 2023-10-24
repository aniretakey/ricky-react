import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { useAppSelector } from '../../hooks/useAppSelector.ts';

export function Navigation(): ReactElement {
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  const handleSignUp = (): void => {
    navigate('/signup');
  };
  const handleLogin = (): void => {
    navigate('/login');
  };
  return (
    <nav>
      <Button buttonText="Favourite" handleClick={(): void => console.log('click')} />
      <Button buttonText="History" handleClick={(): void => navigate('/history')} />
      <Button buttonText="Log in" handleClick={handleLogin} />
      <Button buttonText="Sign up" handleClick={handleSignUp} />
    </nav>
  );
}