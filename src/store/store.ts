import { configureStore } from "@reduxjs/toolkit";
import { authSlice, reducer as authReducer } from "./auth/auth.slice.ts";
import { charactersApi } from "./characters/characters.api.ts";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authReducer,
		[charactersApi.reducerPath]: charactersApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(charactersApi.middleware)
})

export type RootStore = ReturnType<typeof store.getState>