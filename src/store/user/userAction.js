import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createUser = createAsyncThunk(
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
      birthPlace,
      birthDate,
      provinsiId,
      kabupatenId,
      kecamatanId,
      desaId,
      address,
      postalCode,
      rt,
      rw,
      role,
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
        birthPlace: birthPlace,
        birthDate: birthDate,
        provinsiId: provinsiId,
        kabupatenId: kabupatenId,
        kecamatanId: kecamatanId,
        desaId: desaId,
        address: address,
        postalCode: postalCode,
        rtrw: `${rt}/${rw}`,
        role: role,
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
  async (
    { searchKey, searchValue, cursor, cursorDirection, filters },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        params: {
          searchKey: searchKey,
          searchValue: searchValue,
          cursor: cursor,
          cursorDirection: cursorDirection,
          filters: filters,
        },
      };

      const response = await api.get("user", data);

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
      id,
      name,
      phoneNumber,
      nik,
      password,
      ktpURL,
      kartuKeluargaURL,
      occupation,
      birthPlace,
      birthDate,
      kabupatenId,
      kecamatanId,
      desaId,
      address,
      postalCode,
      rt,
      rw,
      role,
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
        birthPlace: birthPlace,
        birthDate: birthDate,
        kabupatenId: kabupatenId,
        kecamatanId: kecamatanId,
        desaId: desaId,
        address: address,
        postalCode: postalCode,
        rtrw: `${rt}/${rw}`,
        role: role,
      };

      const response = await api.put(`user/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteManyUser = createAsyncThunk(
  "user/delete/many",
  async ({ ids }, { rejectWithValue }) => {
    try {
      let idsData = "[";

      ids.map((item, index) => {
        idsData += `"${item}"`;

        if (index + 1 < ids.length) {
          idsData += ",";
        }
      });

      idsData += "]";

      const data = {
        params: {
          ids: idsData,
        },
      };

      const response = await api.delete(`user`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
