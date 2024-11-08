import { Box, styled } from "@mui/material";

export const AppWrapper = styled(Box)(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  margin: "auto",
  padding: theme.spacing(5),
}));
