import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
