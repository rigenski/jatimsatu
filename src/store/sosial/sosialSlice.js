import { createSlice } from "@reduxjs/toolkit";
import { getAllSosial, getAllSosialTypes, getSosialById } from "./sosialAction";

const initialState = {
  sosialTypes: [],
  sosialAll: [],
  sosialDetail: null,
};

const sosialSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetSosial: (state) => {
      state.sosialTypes = [];
      state.sosialAll = [];
    },
  },
  extraReducers: {
    [getAllSosialTypes.fulfilled]: (state, { payload }) => {
      state.sosialTypes = payload.content;
    },
    [getAllSosial.fulfilled]: (state, { payload }) => {
      state.sosialAll = payload.content.sosialForms;
    },
    [getSosialById.fulfilled]: (state, { payload }) => {
      state.sosialDetail = payload.content;
    },
  },
});

export const { resetSosial } = sosialSlice.actions;

export default sosialSlice.reducer;
