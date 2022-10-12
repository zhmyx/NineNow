import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.list = action.payload.list;
    },
  },
});

export const { fetchCategories } = categorySlice.actions;

export default categorySlice.reducer;
