import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserType, UserType } from './auth.model.ts';

// Get users array from LS
const savedUsers = localStorage.getItem('users');
let parsedUsers: UserType[] = [];
if (savedUsers) {
  try {
    parsedUsers = JSON.parse(savedUsers);
  } catch (error) {
    console.error('Ошибка при разборе данных из localStorage', error);
  }
}

// Get current user from LS
const currUser = localStorage.getItem('currentUser');
let parsedCurrentUser: CurrentUserType = {
  login: '',
  favourites: [],
};
if (currUser) {
  try {
    parsedCurrentUser = JSON.parse(currUser);
  } catch (error) {
    console.error('Ошибка при разборе данных из localStorage', error);
  }
}

const initialState = {
  users: parsedUsers,
  currentUser: parsedCurrentUser,
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
    setCurrentUser(state, { payload }) {
      const newState = { ...state }; // Создаем копию состояния
      newState.currentUser = {
        ...newState.currentUser,
        login: payload.login,
        favourites: payload.favourites,
      };
      localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
      return newState;
    },
  },
});

export const { actions, reducer } = authSlice;