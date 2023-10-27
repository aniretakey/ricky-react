import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './auth.model.ts';

export enum HARDCODE {
  CURRENT_USER = 'currentUser',
  ALL_USERS = 'users'
}

// Get users array from LS
// const savedUsers = localStorage.getItem('users');
// let parsedUsers: UserType[] = [];
// if (savedUsers) {
//   try {
//     parsedUsers = JSON.parse(savedUsers);
//   } catch (error) {
//     console.error('Ошибка при разборе данных из localStorage', error);
//   }
// }

// Get current user from LS
// const currUser = localStorage.getItem('currentUser');
// let parsedCurrentUser: CurrentUserType = {
//   login: '',
//   favourites: [],
// };
// if (currUser) {
//   try {
//     parsedCurrentUser = JSON.parse(currUser);
//   } catch (error) {
//     console.error('Ошибка при разборе данных из localStorage', error);
//   }
// }

const initialState = {
  users: JSON.parse(localStorage.getItem(HARDCODE.ALL_USERS) ?? '[]') as UserType[],
  currentUser: JSON.parse(localStorage.getItem(HARDCODE.CURRENT_USER) ?? '{}') as UserType,
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
    setCurrentUser(state, { payload }){
      const [neededUser] = state.users.filter( user => user.login === payload.login && user.password === payload.password )
      state.currentUser = neededUser
      localStorage.setItem(HARDCODE.CURRENT_USER, JSON.stringify(state.currentUser))
    },
    setNewCurrentUser(state, { payload }) {
      state.currentUser = { ...payload, favourites: [] }
      localStorage.setItem(HARDCODE.CURRENT_USER, JSON.stringify(state.currentUser))

      // const newState = { ...state }; // Создаем копию состояния
      // newState.currentUser = {
      //   ...newState.currentUser,
      //   login: payload.login,
      // };
      // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
      // return newState;
    },
    logoutUser(state){
      state.currentUser = {login: '', password: '', favourites: []}
      localStorage.setItem(HARDCODE.CURRENT_USER, JSON.stringify(state.currentUser))
    },
    addFavouritesForUser(state, { payload }) {
      state.currentUser.favourites.push(payload.id)
      state.users = state.users.filter( user => user.login !== payload.login && user.password !== payload.password)
      state.users.push(state.currentUser)

      localStorage.setItem(HARDCODE.CURRENT_USER, JSON.stringify(state.currentUser))
      localStorage.setItem(HARDCODE.ALL_USERS, JSON.stringify(state.users))

      // const newState = { ...state }; // Создаем копию состояния
      // newState.currentUser = {
      //   ...newState.currentUser,
      //   favourites: [...state.currentUser.favourites, payload],
      // };
      // localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
      // return newState;
    },
    removeFavouritesForUser(state, { payload }) {
      const updatedFavourites = state.currentUser.favourites.filter((item) => item !== payload);

      const newState = {
        ...state,
        currentUser: {
          ...state.currentUser,
          favourites: updatedFavourites,
        },
      };
      localStorage.setItem('currentUser', JSON.stringify(newState.currentUser));
      return newState;
    },

  },
});

export const { actions, reducer } = authSlice;
