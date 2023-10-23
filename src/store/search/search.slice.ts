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
    setValue(state, action: PayloadAction<string>) {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export const { actions, reducer } = searchSlice;