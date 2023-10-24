import { Slice } from "@reduxjs/toolkit";

export type UserType = {
	login: string;
	password: string;
}

export type AuthType =  Slice<{users: AuthType[]}, {
	confirm(state: { users: UserType[] }, action: {payload: any, type: string}): void
	addUser(state: { users: UserType[] }, action: { payload: UserType }): void
}, "auth">