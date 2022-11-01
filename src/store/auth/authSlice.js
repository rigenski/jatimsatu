import { createSlice } from "@reduxjs/toolkit";
import { authLogin, checkToken } from "./authAction";

const initialState = {
  user: null,
  login: null,
  authToken: localStorage.getItem("auth-token") ?? null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authLogout: (state) => {
      localStorage.removeItem("auth-token");

      state.user = initialState.user;
      state.login = false;
      state.authToken = initialState.authToken;
    },
  },
  extraReducers: {
    [authLogin.fulfilled]: (state, { payload }) => {
      state.authToken = payload.content.token;
    },
    [checkToken.fulfilled]: (state, { payload }) => {
      state.user = payload.content;
      state.login = true;
    },
    [checkToken.rejected]: (state) => {
      state.login = false;
    },
  },
});

export const { authLogout } = authSlice.actions;

export default authSlice.reducer;
