import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function Navigation(): ReactElement {
  const navigate = useNavigate();
  
  const handleSignUp = (): void => {
    navigate('/signup');
  };
  const handleLogin = (): void => {
    navigate('/login')
  }
  return (
    <nav>
      <Button buttonText="Favourite" handleClick={(): void => console.log('click')} />
      <Button buttonText="Log in" handleClick={handleLogin} />
      <Button buttonText="Sign up" handleClick={handleSignUp} />
    </nav>
  );
}

export default Navigation;