import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: string; history: string[] } = {
  value: '',
  history: [],
};

export const searchSlice = createSlice({
  name: 'searchValues',
  initialState,
  reducers: {
    setHistory(state) {
      state.history.push(state.value);
    },
    setHistoryFromDetails(state, {payload}: PayloadAction<string>) {
      state.history.push(payload);
    },
    setValue(state, {payload}: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.value = payload;
    },
  },
});

export const { actions, reducer } = searchSlice;