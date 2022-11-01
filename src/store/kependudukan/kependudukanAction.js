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
  async (arg, { rejectWithValue }) => {
    try {
      const response = await api.get("kependudukan");

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
  "kependudukan/update",
  async ({ ids }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`kependudukan?ids=${ids}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
