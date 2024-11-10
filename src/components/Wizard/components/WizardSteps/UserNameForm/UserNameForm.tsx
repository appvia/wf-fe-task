import { FormEvent, useState } from "react";
import { useUserInfo } from "../../../../../hooks/useUserInfo";
import { TextField, Button, Alert } from "@mui/material";

export const UserNameForm: React.FC = () => {
  const {
    userName,
    onNameSubmit,
    hasError,
    isSuccess,
    isLoading,
    errorDetails,
  } = useUserInfo();
  const [name, setName] = useState(userName);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onNameSubmit(name);
  };

  return (
    <form onSubmit={onSubmit}>
      {hasError && <Alert severity="error">{errorDetails}</Alert>}
      {isSuccess && <Alert severity="success">Welcome {userName}!</Alert>}

      <TextField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        slotProps={{ htmlInput: { maxLength: 63 } }}
        autoFocus
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        role="submit"
        disabled={isLoading}
      >
        Submit
      </Button>
    </form>
  );
};
