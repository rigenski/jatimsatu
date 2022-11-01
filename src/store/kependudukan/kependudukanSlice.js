import { createSlice } from "@reduxjs/toolkit";
import { getAllKependudukanTypes } from "./kependudukanAction";

const initialState = {
  kependudukanTypes: [],
  kependudukanAll: [],
};

const kependudukanSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    resetKependudukan: (state) => {},
  },
  extraReducers: {
    [getAllKependudukanTypes.fulfilled]: (state, { payload }) => {
      state.kependudukanTypes = payload.content;
    },
    [getAllKependudukanTypes.fulfilled]: (state, { payload }) => {
      state.kependudukanAll = payload.content.kependudukanForms;
    },
  },
});

export const { resetKependudukan } = kependudukanSlice.actions;

export default kependudukanSlice.reducer;
