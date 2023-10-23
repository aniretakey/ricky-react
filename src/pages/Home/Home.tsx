import { ReactElement } from 'react';
import { Search } from '../../components/Search';
import { CardSmall } from '../../components/CardSmall';
import { CardModal } from "../../components/CardModal";

export function Home(): ReactElement {
  const item = {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  };
  return (
    <div>
      <Search />
      <CardSmall
        name={item.name}
        image={item.image}
        id={item.id}
        status={item.status}
        species={item.species}
        type={item.type}
        gender={item.gender}
        url={item.url}
      />
      <CardModal />
    </div>
  );
}
