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
    { searchKey, searchValue, startRange, endRange, cursor, cursorDirection },
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
        },
      };

      const response = await api.get("sosial", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSosialById = createAsyncThunk(
  "sosial/detail",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await api.get(`sosial/${id}`);

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

      const response = await api.delete(`sosial`, data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
