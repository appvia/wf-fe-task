import { FormEvent } from "react";
import { useUserName } from "../../../../../hooks/useUserName";
import { TextField, Button } from "@mui/material";

export const NameForm: React.FC = () => {
  const { name, updateUserName } = useUserName();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // onFirstStepSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* {hasError && (
        <Typography color="error">
          There was an error, please try again.
        </Typography>
      )} */}

      <TextField
        label="Your Name"
        value={name}
        onChange={(e) => updateUserName(e.target.value)}
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
        // disabled={isLoading}
      >
        Submit
      </Button>
    </form>
  );
};
