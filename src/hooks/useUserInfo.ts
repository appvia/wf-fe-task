import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  setIsSuccess,
  setHasError,
  setIsLoading,
  onReset,
  setErrorDetails,
} from "../slices/userInfoSlice";
import { useCallback } from "react";
import { RootState } from "../redux/store";
import { DummyApi } from "../api/dummy-api";

export const useUserInfo = () => {
  const dispatch = useDispatch();
  const { checkName } = DummyApi;

  const userName = useSelector((state: RootState) => state.userInfo.name);
  const isSuccess = useSelector((state: RootState) => state.userInfo.isSuccess);
  const hasError = useSelector((state: RootState) => state.userInfo.hasError);
  const isLoading = useSelector((state: RootState) => state.userInfo.isLoading);
  const errorDetails = useSelector(
    (state: RootState) => state.userInfo.errorDetails
  );

  const updateUserName = useCallback(
    (newName: string) => dispatch(setUserName(newName)),
    [dispatch]
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

  const onNameSubmit = useCallback(
    async (name: string) => {
      updateOnReset();
      try {
        updateIsLoading(true);
        await checkName({ name });
        updateIsLoading(false);
        updateIsSuccess(true);
        updateUserName(name);
      } catch (e) {
        updateErrorDetails(e as string);
        updateIsLoading(false);
        updateHasError(true);
      }
    },
    [
      updateOnReset,
      updateIsLoading,
      checkName,
      updateIsSuccess,
      updateUserName,
      updateErrorDetails,
      updateHasError,
    ]
  );

  return {
    userName,
    isLoading,
    isSuccess,
    hasError,
    errorDetails,
    updateUserName,
    updateIsLoading,
    updateIsSuccess,
    updateHasError,
    onNameSubmit,
  };
};
