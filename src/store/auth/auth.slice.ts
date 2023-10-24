import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './auth.model.ts';

const savedUsers = localStorage.getItem('users');
let parsedUsers: UserType[] = [];
if (savedUsers) {
  try {
    parsedUsers = JSON.parse(savedUsers);
  } catch (error) {
    console.error('Ошибка при разборе данных из localStorage', error);
  }
}

const initialState = {
  users: parsedUsers,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    confirm(state, action) {
      console.log('confirm');
      console.log(state);
      console.log(action);
    },
    addUser(state, { payload }) {
      state.users.push(payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
  },
});

export const { actions, reducer } = authSlice;