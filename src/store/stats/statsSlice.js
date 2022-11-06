import { createSlice } from "@reduxjs/toolkit";
import {
  getStatsKependudukan,
  getStatsSosial,
  getStatsUser,
} from "./statsAction";

const initialState = {
  statsUser: null,
  statsKependudukan: null,
  statsSosial: null,
};

const userSlice = createSlice({
  name: "stats",
  initialState: initialState,
  reducers: {
    resetStats: (state) => {
      state.statsUser = [];
    },
  },
  extraReducers: {
    [getStatsUser.fulfilled]: (state, { payload }) => {
      state.statsUser = payload.content;
    },
    [getStatsKependudukan.fulfilled]: (state, { payload }) => {
      state.statsKependudukan = payload.content;
    },
    [getStatsSosial.fulfilled]: (state, { payload }) => {
      state.statsSosial = payload.content;
    },
  },
});

export const { resetStats } = userSlice.actions;

export default userSlice.reducer;
