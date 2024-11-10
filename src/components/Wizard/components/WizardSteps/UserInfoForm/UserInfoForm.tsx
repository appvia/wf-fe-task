import { FormEvent, useState } from "react";
import { useUserInfo } from "../../../../../hooks/useUserInfo";
import { TextField, Button, Alert, CircularProgress } from "@mui/material";

export const UserInfoForm: React.FC = () => {
  const {
    userName,
    userDescription,
    onNameSubmit,
    hasError,
    isSuccess,
    isLoading,
    errorDetails,
  } = useUserInfo();
  const [name, setName] = useState(userName);
  const [description, setDescription] = useState(userDescription);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onNameSubmit(name, description);
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

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        placeholder="Enter a brief description of yourself"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        role="submit"
        disabled={isLoading}
        startIcon={
          isLoading ? <CircularProgress size={20} color="inherit" /> : null
        }
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
    </form>
  );
};
