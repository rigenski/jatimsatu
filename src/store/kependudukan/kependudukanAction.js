import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createKependudukanForm = createAsyncThunk(
  "kependudukan",
  async ({ formTypeId, registrationForm, documents }, { rejectWithValue }) => {
    try {
      const data = {
        formTypeId: formTypeId,
        registrationForm: registrationForm,
        documents: documents,
      };

      const response = await api.post("kependudukan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAllKependudukanTypes = createAsyncThunk(
  "kependudukan/types",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("kependudukan/types");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAllKependudukan = createAsyncThunk(
  "kependudukan",
  async (
    {
      searchKey,
      searchValue,
      startRange,
      endRange,
      cursor,
      cursorDirection,
      filters,
    },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        params: {
          searchKey: searchKey,
          searchValue: searchValue,
          startRange: startRange,
          endRange: endRange,
          cursor: cursor,
          cursorDirection: cursorDirection,
          filters: filters,
        },
      };

      const response = await api.get("kependudukan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getKependudukanById = createAsyncThunk(
  "kependudukan/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`kependudukan/${id}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateKependudukan = createAsyncThunk(
  "kependudukan/update",
  async ({ id, status, description }, { rejectWithValue }) => {
    try {
      const data = {
        status: status,
        description: description,
      };

      const response = await api.put(`kependudukan/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteKependudukan = createAsyncThunk(
  "kependudukan/delete",
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

      const response = await api.delete(`kependudukan`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
