import { createSlice } from "@reduxjs/toolkit";
import { getAllUser, getUser } from "./userAction";

const initialState = {
  userAll: [],
  userDetail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUser: (state) => {
      state.userAll = [];
      state.userDetail = null;
    },
  },
  extraReducers: {
    [getAllUser.fulfilled]: (state, { payload }) => {
      state.userAll = payload.content;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.userDetail = payload.content.kependudukanForms;
    },
  },
});

export const { resetUser } = userSlice.actions;

export default userSlice.reducer;
