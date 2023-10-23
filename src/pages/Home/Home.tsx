import { ReactElement } from 'react';
import { Search } from '../../components/Search';
import { Welcome } from '../../components/Weclome';

export function Home(): ReactElement {
  return (
    <div>
      <Search />
      <Welcome />
    </div>
  );
}
