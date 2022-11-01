import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// register

export const authRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      phoneNumber,
      nik,
      birthDate,
      birthPlace,
      password,
      ktpURL,
      kartuKeluargaURL,
      occupation,
      provinsiId,
      kabupatenId,
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
        birthDate: birthDate,
        birthPlace: birthPlace,
        password: password,
        ktpURL: ktpURL,
        kartuKeluargaURL: kartuKeluargaURL,
        occupation: occupation,
        provinsiId: provinsiId,
        kabupatenId: kabupatenId,
        kecamatanId: kecamatanId,
        desaId: desaId,
        address: address,
        postalCode: postalCode,
        rtrw: `${rt}/${rw}`,
      };

      const response = await api.post("auth/register", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const confirmUser = createAsyncThunk(
  "auth/confirm",
  async ({ token }, { rejectWithValue }) => {
    try {
      const data = {
        token: token,
      };

      const response = await api.post("auth/confirm", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const resendConfirmation = createAsyncThunk(
  "auth/resend-confirmation",
  async ({ phoneNumber }, { rejectWithValue }) => {
    try {
      const data = {
        phoneNumber: phoneNumber,
      };

      const response = await api.post("auth/resend-confirmation", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// login

export const authLogin = createAsyncThunk(
  "auth/login",
  async ({ phoneNumber, password }, { rejectWithValue }) => {
    try {
      const data = {
        phoneNumber: phoneNumber,
        password: password,
      };

      const response = await api.post("auth/login", data);

      localStorage.setItem("auth-token", response.data.content.token);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const checkToken = createAsyncThunk(
  "auth/check-token",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();

      const data = {
        token: auth.authToken,
      };

      const response = await api.post("auth/check-token", data);

      api.defaults.headers.common["Authorization"] = "Bearer " + auth.authToken;

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// reset password

export const requestResetPassword = createAsyncThunk(
  "auth/reset-password",
  async ({ phoneNumber }, { rejectWithValue }) => {
    try {
      const data = {
        phoneNumber: phoneNumber,
      };

      const response = await api.post("auth/reset-password", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const checkResetPasswordToken = createAsyncThunk(
  "auth/reset-password",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await api.get(`auth/reset-password/${token}`);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const resetPasswod = createAsyncThunk(
  "auth/reset-password",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const data = {
        token: token,
        password: password,
      };

      const response = await api.put("auth/reset-password", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const resendRequestResetPassword = createAsyncThunk(
  "auth/reset-password/reset",
  async ({ phoneNumber }, { rejectWithValue }) => {
    try {
      const data = {
        phoneNumber: phoneNumber,
      };

      const response = await api.post("auth/reset-password/reset", data);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
