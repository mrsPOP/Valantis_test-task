import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();

const filteredPagesSlice = createSlice({
  name: "filteredPages",
  initialState: {
    filteredPages: new Map(),
  },
  reducers: {
    addFilteredPage(state, action) {
      state.filteredPages.set(action.payload.pageNumber, action.payload.pageInfo);
    },
    resetFilteredPages(state) {
      state.filteredPages.clear();
    },
  },
});

export const { addFilteredPage, resetFilteredPages } = filteredPagesSlice.actions;

export default filteredPagesSlice.reducer;