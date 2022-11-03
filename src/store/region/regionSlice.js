import { createSlice } from "@reduxjs/toolkit";
import {
  getDesaById,
  getDesaByKecamatan,
  getKabupaten,
  getKabupatenById,
  getKecamatan,
  getKecamatanById,
  getProvinsi,
} from "./regionAction";

const initialState = {
  provinsiDetail: null,
  kabupatenDetail: null,
  kecamatanDetail: null,
  desaDetail: null,
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
      state.provinsiDetail = null;
      state.kabupatenDetail = null;
      state.kecamatanDetail = null;
      state.desaDetail = null;
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
    [getKabupatenById.fulfilled]: (state, { payload }) => {
      state.kabupatenDetail = payload.content;
    },
    [getKecamatanById.fulfilled]: (state, { payload }) => {
      state.kecamatanDetail = payload.content;
    },
    [getDesaById.fulfilled]: (state, { payload }) => {
      state.desaDetail = payload.content;
    },
  },
});

export const { resetRegion } = regionSlice.actions;

export default regionSlice.reducer;
