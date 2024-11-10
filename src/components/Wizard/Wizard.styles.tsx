import { Box, styled } from "@mui/material";

export const ContentWrapper = styled(Box)(({ theme }) => ({
  minHeight: "300px",
  margin: "auto",
  paddingTop: theme.spacing(7),
}));
