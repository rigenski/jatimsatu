import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createSosialForm = createAsyncThunk(
  "sosial",
  async ({ formTypeId, registrationForm, documents }, { rejectWithValue }) => {
    try {
      const data = {
        formTypeId: formTypeId,
        registrationForm: registrationForm,
        documents: documents,
      };

      const response = await api.post("sosial", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAllSosialTypes = createAsyncThunk(
  "sosial/types",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("sosial/types");

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getAllSosial = createAsyncThunk(
  "sosial",
  async (
    { searchKey, searchValue, startRange, lastRange, rows, cursor },
    { rejectWithValue }
  ) => {
    try {
      const data = {
        params: {
          searchKey: searchKey,
          searchValue: searchValue,
          startRange: startRange,
          lastRange: lastRange,
          rows: rows,
          cursor: cursor,
        },
      };

      const response = await api.get("sosial", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateSosial = createAsyncThunk(
  "sosial/update",
  async ({ id, status, description }, { rejectWithValue }) => {
    try {
      const data = {
        status: status,
        description: description,
      };

      const response = await api.put(`sosial/${id}`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteSosial = createAsyncThunk(
  "sosial/delete",
  async ({ ids }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`sosial?ids=${ids}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
