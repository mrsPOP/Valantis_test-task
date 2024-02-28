import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pagination: { pagesNumber: 0, currentPage: 0 },
  },
  reducers: {
    setPagination(state, action) {
      state.pagination = action.payload.pagination;
    },
  },
});

export const { setPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
