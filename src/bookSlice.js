import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [] 
  },
  reducers: {
    addBooks: (state, action) => {
      state.items.unshift(action.payload);
    }
  }
});

export const { addBooks } = bookSlice.actions;
export default bookSlice.reducer;
