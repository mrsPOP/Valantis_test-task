import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsOnPage",
  initialState: {
    products: [],
  },
  reducers: {
    setProductsList(state, action) {
      state.products = action.payload.productList;
    },
  },
});

export const { setProductsList } = productsSlice.actions;

export default productsSlice.reducer;
