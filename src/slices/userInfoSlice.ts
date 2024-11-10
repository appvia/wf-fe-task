import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserNameState {
  name: string;
  description: string;
  isSuccess: boolean;
  hasError: boolean;
  errorDetails: string;
  isLoading: boolean;
}

const initialState: UserNameState = {
  name: "",
  description: "",
  isSuccess: false,
  hasError: false,
  errorDetails: "",
  isLoading: false,
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
    setErrorDetails: (state, action: PayloadAction<string>) => {
      state.errorDetails = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    onReset: (state) => {
      state.name = "";
      state.isLoading = false;
      state.hasError = false;
      state.errorDetails = "";
      state.isSuccess = false;
    },
  },
});

export const {
  setUserName,
  setUserDescription,
  setIsSuccess,
  setHasError,
  setErrorDetails,
  setIsLoading,
  onReset,
} = userInfoSlice.actions;
export default userInfoSlice.reducer;
