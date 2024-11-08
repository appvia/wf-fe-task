import { Box, styled } from "@mui/material";

export const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: theme.spacing(2),
}));
