import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    getFilter: (_, action) => action.payload,
  },
});

export const { getFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;