import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FeatureState {
  selectedFeatureIds: string[];
}

const initialState: FeatureState = {
  selectedFeatureIds: [],
};

export const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setSelectedFeatures: (state, action: PayloadAction<string[]>) => {
      state.selectedFeatureIds = action.payload;
    },
  },
});

export const { setSelectedFeatures } = featureSlice.actions;
export default featureSlice.reducer;
