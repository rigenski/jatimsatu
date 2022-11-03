import { createSlice } from "@reduxjs/toolkit";
import {
  getAllKependudukan,
  getAllKependudukanTypes,
  getKependudukanById,
} from "./kependudukanAction";

const initialState = {
  kependudukanTypes: [],
  kependudukanAll: [],
  kependudukanDetail: null,
};

const kependudukanSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetKependudukan: (state) => {
      state.kependudukanTypes = [];
      state.kependudukanAll = [];
      state.kependudukanDetail = null;
    },
  },
  extraReducers: {
    [getAllKependudukanTypes.fulfilled]: (state, { payload }) => {
      state.kependudukanTypes = payload.content;
    },
    [getAllKependudukan.fulfilled]: (state, { payload }) => {
      state.kependudukanAll = payload.content.kependudukanForms;
    },
    [getKependudukanById.fulfilled]: (state, { payload }) => {
      state.kependudukanDetail = payload.content;
    },
  },
});

export const { resetKependudukan } = kependudukanSlice.actions;

export default kependudukanSlice.reducer;
