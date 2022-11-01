import { configureStore } from "@reduxjs/toolkit";
import authSlice from "src/store/auth/authSlice";
import regionSlice from "src/store/region/regionSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    region: regionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
