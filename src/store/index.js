import { configureStore } from "@reduxjs/toolkit";
import authSlice from "src/store/auth/authSlice";
import regionSlice from "src/store/region/regionSlice";
import kependudukanSlice from "src/store/kependudukan/kependudukanSlice";
import sosialSlice from "src/store/sosial/sosialSlice";
import userSlice from "src/store/user/userSlice";
import statsSlice from "src/store/stats/statsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    region: regionSlice,
    kependudukan: kependudukanSlice,
    sosial: sosialSlice,
    user: userSlice,
    stats: statsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
