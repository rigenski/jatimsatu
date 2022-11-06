import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// provinsi
export const getProvinsi = createAsyncThunk(
  "provinsi",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("provinsi");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// kabupaten
export const getKabupaten = createAsyncThunk(
  "kabupaten",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("kabupaten");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKecamatanByKabupaten = createAsyncThunk(
  "kabupaten/kecamatan",
  async ({ kabupatenId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`kabupaten/${kabupatenId}/kecamatan`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKabupatenById = createAsyncThunk(
  "kabupaten/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`kabupaten/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// kecamatan
export const getKecamatan = createAsyncThunk(
  "kecamatan",
  async (
    { searchKey, searchValue, cursor, cursorDirection },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        params: {
          searchKey: searchKey,
          searchValue: searchValue,
          cursor: cursor,
          cursorDirection: cursorDirection,
        },
      };

      const response = await api.get("kecamatan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKecamatanById = createAsyncThunk(
  "kecamatan/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`kecamatan/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createKecamatan = createAsyncThunk(
  "kecamatan/create",
  async ({ name, kabupatenId, provinsiId }, { rejectWithValue }) => {
    try {
      const data = {
        name: name,
        kabupatenId: kabupatenId,
        provinsiId: provinsiId,
      };

      const response = await api.post("kecamatan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateKecamatan = createAsyncThunk(
  "kecamatan/update",
  async ({ id, name, kabupatenId, provinsiId }, { rejectWithValue }) => {
    try {
      const data = {
        name: name,
        kabupatenId: kabupatenId,
        provinsiId: provinsiId,
      };

      const response = await api.put(`kecamatan/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteManyKecamatan = createAsyncThunk(
  "kecamatan/delete/many",
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

      const response = await api.delete("kecamatan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// desa
export const getDesa = createAsyncThunk(
  "desa",
  async (
    { searchKey, searchValue, cursor, cursorDirection },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        params: {
          searchKey: searchKey,
          searchValue: searchValue,
          cursor: cursor,
          cursorDirection: cursorDirection,
        },
      };

      const response = await api.get("desa", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getDesaByKecamatan = createAsyncThunk(
  "kecamatan/desa",
  async ({ kecamatanId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`kecamatan/${kecamatanId}/desa`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getDesaById = createAsyncThunk(
  "desa/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`desa/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createDesa = createAsyncThunk(
  "desa/create",
  async (
    { name, kecamatanId, kabupatenId, provinsiId },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        name: name,
        kecamatanId: kecamatanId,
        kabupatenId: kabupatenId,
        provinsiId: provinsiId,
      };

      const response = await api.post("desa", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateDesa = createAsyncThunk(
  "desa/update",
  async (
    { id, name, kecamatanId, kabupatenId, provinsiId },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        name: name,
        kecamatanId: kecamatanId,
        kabupatenId: kabupatenId,
        provinsiId: provinsiId,
      };

      const response = await api.put(`desa/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteManyDesa = createAsyncThunk(
  "desa/delete/many",
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

      const response = await api.delete("desa", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
