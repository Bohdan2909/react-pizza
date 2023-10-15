import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "./../../feature/home/Home";

export type FilterType = {
   categoryId: number;
   sort: SortType;
   currentPage: number;
};
export const initialState: FilterType = {
   categoryId: 0,
   currentPage: 1,
   sort: {
      name: "популярности",
      sortProperty: "rating",
   },
};

const filterSlice = createSlice({
   name: "filter",
   initialState,
   reducers: {
      setCategoryId: (state, action: PayloadAction<number>) => {
         state.categoryId = action.payload;
      },
      setSort: (state, action: PayloadAction<SortType>) => {
         state.sort = action.payload;
      },
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.currentPage = action.payload;
      },
      setFilters: (state, action: PayloadAction<any>) => {
         state.currentPage = Number(action.payload.currentPage);
         state.categoryId = Number(action.payload.categoryId);
         state.sort = action.payload.sort;
      },
   },
});

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
