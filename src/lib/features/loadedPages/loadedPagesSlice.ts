import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();

const loadedPagesSlice = createSlice({
  name: "loadedPages",
  initialState: {
    loadedPages: new Map(),
  },
  reducers: {
    addPage(state, action) {
      state.loadedPages.set(action.payload.pageNumber, action.payload.pageInfo);
    },
    resetLoadedPages(state) {
      state.loadedPages.clear();
    },
  },
});

export const { addPage, resetLoadedPages } = loadedPagesSlice.actions;

export default loadedPagesSlice.reducer;
