import { useDispatch, useSelector } from "react-redux";
import {
  setIsSuccess,
  setHasError,
  setIsLoading,
  onReset,
  setErrorDetails,
} from "../slices/submitSlice";
import { useCallback } from "react";
import { RootState } from "../redux/store";
import { DummyApi } from "../api/dummy-api";
import { useUserInfo } from "./useUserInfo";
import { useSelectedFeatures } from "./useSelectedFeatures";

export const useInfoSubmitted = () => {
  const dispatch = useDispatch();
  const { submit } = DummyApi;
  const { userName } = useUserInfo();
  const { selectedFeatureIds } = useSelectedFeatures();

  const isSuccess = useSelector(
    (state: RootState) => state.infoSubmitted.isSuccess
  );
  const hasError = useSelector(
    (state: RootState) => state.infoSubmitted.hasError
  );
  const isLoading = useSelector(
    (state: RootState) => state.infoSubmitted.isLoading
  );
  const errorDetails = useSelector(
    (state: RootState) => state.infoSubmitted.errorDetails
  );

  const updateIsSuccess = useCallback(
    (success: boolean) => dispatch(setIsSuccess(success)),
    [dispatch]
  );

  const updateIsLoading = useCallback(
    (loading: boolean) => dispatch(setIsLoading(loading)),
    [dispatch]
  );

  const updateHasError = useCallback(
    (error: boolean) => dispatch(setHasError(error)),
    [dispatch]
  );

  const updateErrorDetails = useCallback(
    (error: string) => dispatch(setErrorDetails(error)),
    [dispatch]
  );

  const updateOnReset = useCallback(() => dispatch(onReset()), [dispatch]);

  const onFinalSubmit = useCallback(async () => {
    updateOnReset();
    try {
      updateIsLoading(true);
      await submit({ name: userName, features: selectedFeatureIds });
      updateIsLoading(false);
      updateIsSuccess(true);
    } catch (e) {
      updateErrorDetails(e as string);
      updateIsLoading(false);
      updateHasError(true);
    }
  }, [
    updateOnReset,
    updateIsLoading,
    submit,
    userName,
    selectedFeatureIds,
    updateIsSuccess,
    updateErrorDetails,
    updateHasError,
  ]);

  return {
    isLoading,
    isSuccess,
    hasError,
    errorDetails,
    updateIsLoading,
    updateIsSuccess,
    updateHasError,
    onFinalSubmit,
  };
};
