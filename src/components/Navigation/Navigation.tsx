import { ReactElement } from 'react';
import Button from '../Button/Button';

function Navigation(): ReactElement {
  return (
    <nav>
      <Button buttonText="Favourite" handleClick={(): void => console.log('click')} />
      <Button buttonText="Log in" handleClick={(): void => console.log('click')} />
      <Button buttonText="Sign up" handleClick={(): void => console.log('click')} />
    </nav>
  );
}

export default Navigation;
