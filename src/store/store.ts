import { configureStore } from "@reduxjs/toolkit";
import { authSlice, reducer as authReducer } from "./auth/auth.slice.ts";

export const store = configureStore({
	reducer: {
		[authSlice.name]: authReducer,
	}
})

export type RootStore = ReturnType<typeof store.getState>