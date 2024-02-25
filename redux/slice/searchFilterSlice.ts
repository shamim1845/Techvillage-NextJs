import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  searchKeyword: "",
  activeCategory: "All Categories",
};

export const searchFilterSlice = createSlice({
  name: "searchFilterSlice",
  initialState,
  reducers: {
    addSearchKeyword: (state, { payload }) => {
      state.searchKeyword = payload.keyword;
    },
    addActiveCategory: (state, { payload }) => {
      state.activeCategory = payload.category;
    },
  },
});

export const { addActiveCategory, addSearchKeyword } =
  searchFilterSlice.actions;

export default searchFilterSlice.reducer;

export const selectActiveCategories = (state: RootState) =>
  state.searchFilter.activeCategory;

export const selectSearchKeyword = (state: RootState) =>
  state.searchFilter.searchKeyword;
