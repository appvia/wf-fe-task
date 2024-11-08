import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserNameState {
  name: string;
  isSuccess: boolean;
  hasError: boolean;
}

const initialState: UserNameState = {
  name: "",
  isSuccess: false,
  hasError: false,
};

export const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
});

// Export actions
export const { setUserName, setIsSuccess, setHasError } = userNameSlice.actions;

// Export only the reducer as default
export default userNameSlice.reducer;