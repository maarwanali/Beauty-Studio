import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./slices/AdminSlice";
import servReducer from "./slices/Services";
export const store = configureStore({
  reducer: {
    admin: adminReducer,
    serv: servReducer,
  },
});
