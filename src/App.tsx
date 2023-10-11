import './App.css';
import { ReactElement } from 'react';
import Button from './components/Button/Button';

const foo = (): void => {
  console.log('работает');
};
function App(): ReactElement {
  return (
    <>
      Hello!
      <Button buttonText="Нажми" handleClick={foo} />
    </>
  );
}

export default App;
