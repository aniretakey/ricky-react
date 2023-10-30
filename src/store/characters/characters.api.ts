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
    getAllCharacters: build.query<RickyTypes, null>({
      query: () => '/character',
    }),
    getCharacterByPage: build.query<RickyTypes, number>({
      query: (page) => ({
        url: '/character/',
        params: {
          page
        }
      }),
    }),
    getCharacterByName: build.query<RickyTypes, string>({
      query: (name) => ({
        url: '/character/',
        params: {
          name,
        },
      }),
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetAllCharactersQuery, useGetCharacterByNameQuery, useLazyGetCharacterByPageQuery } = charactersApi;
