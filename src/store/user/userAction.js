import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createKependudukanForm = createAsyncThunk(
  "user/create",
  async (
    {
      name,
      phoneNumber,
      nik,
      password,
      ktpURL,
      kartuKeluargaURL,
      occupation,
      kecamatanId,
      desaId,
      address,
      postalCode,
      rt,
      rw,
    },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        name: name,
        phoneNumber: phoneNumber,
        nik: nik,
        password: password,
        ktpURL: ktpURL,
        kartuKeluargaURL: kartuKeluargaURL,
        occupation: occupation,
        kecamatanId: kecamatanId,
        desaId: desaId,
        address: address,
        postalCode: postalCode,
        rtrw: `${rt}/${rw}`,
      };

      const response = await api.post("user", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`user/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAllUser = createAsyncThunk(
  "user",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("user");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (
    {
      name,
      phoneNumber,
      nik,
      password,
      ktpURL,
      kartuKeluargaURL,
      occupation,
      kecamatanId,
      desaId,
      address,
      postalCode,
      rt,
      rw,
    },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        name: name,
        phoneNumber: phoneNumber,
        nik: nik,
        password: password,
        ktpURL: ktpURL,
        kartuKeluargaURL: kartuKeluargaURL,
        occupation: occupation,
        kecamatanId: kecamatanId,
        desaId: desaId,
        address: address,
        postalCode: postalCode,
        rtrw: `${rt}/${rw}`,
      };

      const response = await api.put(`user/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteKependudukan = createAsyncThunk(
  "user/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`user/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
