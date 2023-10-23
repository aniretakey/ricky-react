import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as authActions } from '../store/auth/auth.slice.ts';
import { actions as searchActions } from '../store/search/search.slice.ts';

const actions = {
  ...authActions,
  ...searchActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};