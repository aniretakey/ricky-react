import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "./auth.model.ts";

const initialState = {
	users: []
}

export const authSlice: AuthType = createSlice({
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
		}
	}
})

export const { actions, reducer } = authSlice