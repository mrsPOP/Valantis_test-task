import { createSlice } from "@reduxjs/toolkit";

const setFilterSlice = createSlice({
  name: "filterSet",
  initialState: {
    filter: {},
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload.filter;
    },
    resetFilter(state) {
      state.filter = {};
    },
  },
});

export const { setFilter, resetFilter } = setFilterSlice.actions;

export default setFilterSlice.reducer;
