import { ReactElement } from 'react';
import { Input } from '../../components/Input';
import Button from '../../components/Button/Button';

export default function Home(): ReactElement {
  return (
    <div>
      <Input />
      <Button buttonText="Button" handleClick={(): void => console.log('click')} />
    </div>
  );
}
