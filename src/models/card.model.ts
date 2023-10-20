export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
};

type InfoType = {
  count: number; // The length of the response
  pages: number; // The amount of pages
  next: string; // Link to the next page (if it exists)
  prev: string; // Link to the previous page (if it exists)
};

export type RickyTypes = {
  info: InfoType;
  results: CharacterType[];
};
