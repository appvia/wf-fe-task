import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useCallback } from "react";
import { setSelectedFeatures } from "../slices/featureSlice";

export const useSelectedFeatures = () => {
  const dispatch = useDispatch();

  const selectedFeatureIds = useSelector(
    (state: RootState) => state.selectedFeatures.selectedFeatureIds
  );

  const updateSelectedFeatures = useCallback(
    (selectedFeatureIds: string[]) =>
      dispatch(setSelectedFeatures(selectedFeatureIds)),
    [dispatch]
  );

  return {
    selectedFeatureIds,
    updateSelectedFeatures,
  };
};
