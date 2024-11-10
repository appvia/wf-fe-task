import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserNameState {
  isSuccess: boolean;
  hasError: boolean;
  errorDetails: string;
  isLoading: boolean;
}

const initialState: UserNameState = {
  isSuccess: false,
  hasError: false,
  errorDetails: "",
  isLoading: false,
};

export const submitSlice = createSlice({
  name: "infoSubmitted",
  initialState,
  reducers: {
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
      state.isLoading = false;
      state.hasError = false;
      state.errorDetails = "";
      state.isSuccess = false;
    },
  },
});

export const {
  setIsSuccess,
  setHasError,
  setErrorDetails,
  setIsLoading,
  onReset,
} = submitSlice.actions;
export default submitSlice.reducer;
