import { createSlice } from "@reduxjs/toolkit";

const setFilterSlice = createSlice({
  name: "filterSet",
  initialState: {
    filter: {
      product: false,
      price: false,
      brand: false,
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = setFilterSlice.actions;

export default setFilterSlice.reducer;
