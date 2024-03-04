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
  },
});

export const { setFilter } = setFilterSlice.actions;

export default setFilterSlice.reducer;
