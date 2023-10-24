import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "./auth.model.ts";

const initialState = {
	users: [] as UserType[]
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		confirm(state, action){
			console.log('confirm')
			console.log(state)
			console.log(action)
		},
		addUser(state, { payload}){
			state.users.push(payload)
			localStorage.setItem('users', JSON.stringify(state.users));
		},

	}
})

export const { actions, reducer } = authSlice