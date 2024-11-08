import { configureStore } from "@reduxjs/toolkit";
import userNameReducer from "../slices/userNameSlice";
const store = configureStore({
  reducer: {
    userName: userNameReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
