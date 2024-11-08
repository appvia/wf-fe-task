import { Grid } from "@mui/material";
import { CenteredTypography } from "./ReviewScreen.styles";
import { useUserName } from "../../../../../hooks/useUserName";

export const ReviewScreen = () => {
  const { name } = useUserName();

  return (
    <Grid
      container
      spacing={2}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8}>
        <CenteredTypography variant="h6">Name</CenteredTypography>
        <CenteredTypography>{name}</CenteredTypography>
      </Grid>
      <Grid item xs={4}>
        <CenteredTypography variant="h6">Age</CenteredTypography>
        <CenteredTypography>Name</CenteredTypography>
      </Grid>
    </Grid>
  );
};
