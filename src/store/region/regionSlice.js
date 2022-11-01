import { createSlice } from "@reduxjs/toolkit";
import {
  getDesaByKecamatan,
  getKabupaten,
  getKecamatan,
  getProvinsi,
} from "./regionAction";

const initialState = {
  provinsiAll: [],
  kabupatenAll: [],
  kecamatanAll: [],
  desaAll: [],
};

const regionSlice = createSlice({
  name: "region",
  initialState: initialState,
  reducers: {
    resetRegion: (state) => {
      state.provinsiAll = [];
      state.kabupatenAll = [];
      state.kecamatanAll = [];
      state.desaAll = [];
    },
  },
  extraReducers: {
    [getProvinsi.fulfilled]: (state, { payload }) => {
      state.provinsiAll = payload.content.provinsi;
    },
    [getKabupaten.fulfilled]: (state, { payload }) => {
      state.kabupatenAll = payload.content.kabupaten;
    },
    [getKecamatan.fulfilled]: (state, { payload }) => {
      state.kecamatanAll = payload.content.kecamatan;
    },
    [getDesaByKecamatan.fulfilled]: (state, { payload }) => {
      state.desaAll = payload.content;
    },
  },
});

export const { resetRegion } = regionSlice.actions;

export default regionSlice.reducer;
