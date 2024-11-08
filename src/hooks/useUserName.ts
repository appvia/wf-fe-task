import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  setIsSuccess,
  setHasError,
} from "../slices/userNameSlice";
import { useCallback } from "react";
import { RootState } from "../redux/store";

export const useUserName = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.userName.name);
  const isSuccess = useSelector((state: RootState) => state.userName.isSuccess);
  const hasError = useSelector((state: RootState) => state.userName.hasError);

  const updateUserName = useCallback(
    (newName: string) => dispatch(setUserName(newName)),
    [dispatch]
  );

  const updateIsSuccess = useCallback(
    (success: boolean) => dispatch(setIsSuccess(success)),
    [dispatch]
  );

  const updateHasError = useCallback(
    (error: boolean) => dispatch(setHasError(error)),
    [dispatch]
  );

  return {
    name,
    isSuccess,
    hasError,
    updateUserName,
    updateIsSuccess,
    updateHasError,
  };
};
