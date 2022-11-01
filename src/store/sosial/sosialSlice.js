import { createSlice } from "@reduxjs/toolkit";
import { getAllSosial, getAllSosialTypes } from "./sosialAction";

const initialState = {
  sosialTypes: [],
  sosialAll: [],
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
  },
});

export const { resetSosial } = sosialSlice.actions;

export default sosialSlice.reducer;
