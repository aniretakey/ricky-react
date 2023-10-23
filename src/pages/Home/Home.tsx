import { ReactElement } from 'react';
import { Search } from '../../components/Search';

export function Home(): ReactElement {
  return (
    <div>
      <Search />
      <div>Welcome component</div>
    </div>
  );
}