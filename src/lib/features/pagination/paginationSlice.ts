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
    resetPagination(state) {
      state.pagination = { pagesNumber: 1, currentPage: 1 };
    }
  },
});

export const { setPagination, resetPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
