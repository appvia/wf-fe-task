import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "../slices/userInfoSlice";
import featureSliceReducer from "../slices/featureSlice";
import submitSliceReducer from "../slices/submitSlice";

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    selectedFeatures: featureSliceReducer,
    infoSubmitted: submitSliceReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
