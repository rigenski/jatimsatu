import { createSlice } from "@reduxjs/toolkit";
import {
  getAllKependudukan,
  getAllKependudukanTypes,
} from "./kependudukanAction";

const initialState = {
  kependudukanTypes: [],
  kependudukanAll: [],
};

const kependudukanSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetKependudukan: (state) => {
      state.kependudukanTypes = [];
      state.kependudukanAll = [];
    },
  },
  extraReducers: {
    [getAllKependudukanTypes.fulfilled]: (state, { payload }) => {
      state.kependudukanTypes = payload.content;
    },
    [getAllKependudukan.fulfilled]: (state, { payload }) => {
      state.kependudukanAll = payload.content.kependudukanForms;
    },
  },
});

export const { resetKependudukan } = kependudukanSlice.actions;

export default kependudukanSlice.reducer;
