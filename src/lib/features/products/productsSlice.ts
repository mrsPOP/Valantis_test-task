import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsOnPage",
  initialState: {
    products: [],
  },
  reducers: {
    updateProductsList(state, action) {
      state.products = action.payload.productList;
    },
  },
});

export const { updateProductsList } = productsSlice.actions;

export default productsSlice.reducer;
