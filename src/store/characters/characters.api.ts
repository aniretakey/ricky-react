import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterType, RickyTypes } from '../../models/card.model.ts';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    getCharacterById: build.query<CharacterType, number>({
      query: (characterId) => `/character/${characterId}`,
    }),
    getCharacterByPage: build.query<RickyTypes, number>({
      query: (page) => ({
        url: '/character/',
        params: {
          page
        }
      }),
    }),
    getCharacterByName: build.query<RickyTypes, { name: string, page: string }>({
      query: ({ name, page }) => ({
        url: '/character/',
        params: {
          name,
          page
        },
      }),
    }),
  }),
});

export const {
  useGetCharacterByIdQuery,
  useGetCharacterByNameQuery,
  useLazyGetCharacterByNameQuery,
  useLazyGetCharacterByPageQuery
} = charactersApi;
