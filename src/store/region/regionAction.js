import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getProvinsi = createAsyncThunk(
  "/provinsi",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("/provinsi");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKabupaten = createAsyncThunk(
  "/kabupaten",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("/kabupaten");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKabupatenById = createAsyncThunk(
  "/kabupaten/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/kabupaten/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKecamatan = createAsyncThunk(
  "/kecamatan",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("/kecamatan");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKecamatanById = createAsyncThunk(
  "/kecamatan/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/kecamatan/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getDesaByKecamatan = createAsyncThunk(
  "/kecamatan/desa",
  async ({ kecamatanId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/kecamatan/${kecamatanId}/desa`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getDesaById = createAsyncThunk(
  "/desa/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/desa/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
