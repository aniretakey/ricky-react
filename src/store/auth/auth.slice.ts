import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from './auth.model.ts';

export enum AUTH {
  CURRENT_USER = 'currentUser',
  ALL_USERS = 'users'
}

const initialState = {
  users: JSON.parse(localStorage.getItem(AUTH.ALL_USERS) ?? '[]') as UserType[],
  currentUser: JSON.parse(localStorage.getItem(AUTH.CURRENT_USER) ?? '{}') as UserType,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<UserType>) {
      state.users.push(payload);
      localStorage.setItem(AUTH.ALL_USERS, JSON.stringify(state.users));
    },
    setCurrentUser(state, { payload }: PayloadAction<Omit<UserType, 'favourites'>>){
      const [neededUser] = state.users.filter( user => user.login === payload.login && user.password === payload.password )
      state.currentUser = neededUser
      localStorage.setItem(AUTH.CURRENT_USER, JSON.stringify(state.currentUser))
    },
    setNewCurrentUser(state, { payload }: PayloadAction<UserType>) {
      state.currentUser = { ...payload }
      localStorage.setItem(AUTH.CURRENT_USER, JSON.stringify(state.currentUser))
    },
    logoutUser(state){
      state.currentUser = {login: '', password: '', favourites: []}
      localStorage.setItem(AUTH.CURRENT_USER, JSON.stringify(state.currentUser))
    },
    toggleFavouritesForUser(state, { payload }: PayloadAction<{id: number}>){
      if (state.currentUser.favourites.includes(payload.id))
        state.currentUser.favourites = state.currentUser.favourites.filter(id => id !== payload.id)
      else
        state.currentUser.favourites.push(payload.id)

      // TODO: доделать логкиу, чтобы пользователь не перезаписывался
      state.users = state.users.filter( user => user.login !== state.currentUser.login && user.password !== state.currentUser.password)
      state.users.push(state.currentUser)
      localStorage.setItem(AUTH.ALL_USERS, JSON.stringify(state.users))
      localStorage.setItem(AUTH.CURRENT_USER, JSON.stringify(state.currentUser))
    }
  },
});

export const { actions, reducer } = authSlice;
