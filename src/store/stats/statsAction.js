import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getStatsUser = createAsyncThunk(
  "stats/user",
  async ({ filters }, { rejectWithValue }) => {
    try {
      const data = {
        params: {
          filters: filters,
        },
      };

      const response = await api.get("stats/user", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getStatsKependudukan = createAsyncThunk(
  "stats/kependudukan",
  async ({ filters }, { rejectWithValue }) => {
    try {
      const data = {
        params: {
          filters: filters,
        },
      };

      const response = await api.get("stats/forms/kependudukan", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getStatsSosial = createAsyncThunk(
  "stats/sosial",
  async ({ filters }, { rejectWithValue }) => {
    try {
      const data = {
        params: {
          filters: filters,
        },
      };

      const response = await api.get("stats/forms/sosial", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
