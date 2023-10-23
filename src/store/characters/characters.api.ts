import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterType } from "../../models/card.model.ts";

export const charactersApi = createApi({
	reducerPath: 'charactersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://rickandmortyapi.com/api/'
	}),
	endpoints: build => ({
		getCharacterById: build.query<CharacterType, number>({
			query: (characterId) => `/character/${characterId}`
		}),
	})
})

export const { useLazyGetCharacterByIdQuery, useGetCharacterByIdQuery } = charactersApi