import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  setUserDescription,
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
  const userDescription = useSelector(
    (state: RootState) => state.userInfo.description
  );
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

  const updateUserDescription = useCallback(
    (newDescription: string) => dispatch(setUserDescription(newDescription)),
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
    async (name: string, description: string) => {
      updateOnReset();
      try {
        updateIsLoading(true);
        await checkName({ name });
        updateIsLoading(false);
        updateIsSuccess(true);
        updateUserDescription(description);
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
      updateUserDescription,
      updateUserName,
      updateErrorDetails,
      updateHasError,
    ]
  );

  return {
    userName,
    userDescription,
    isLoading,
    isSuccess,
    hasError,
    errorDetails,
    updateUserName,
    updateUserDescription,
    updateIsLoading,
    updateIsSuccess,
    updateHasError,
    onNameSubmit,
  };
};
