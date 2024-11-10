import { Alert, Box, Grid, Typography } from "@mui/material";
import { FEATURE_OPTIONS } from "../FeatureSelectList/FeatureSelectList.constant";
import { Feature } from "../FeatureSelectList/FeatureSelectList.types";
import {
  useUserInfo,
  useSelectedFeatures,
  useInfoSubmitted,
} from "../../../../../hooks";

export const ReviewScreen = () => {
  const { userName } = useUserInfo();
  const { selectedFeatureIds } = useSelectedFeatures();
  const { isSuccess } = useInfoSubmitted();

  const selectedFeatures: Feature[] = FEATURE_OPTIONS.filter((feature) =>
    selectedFeatureIds.includes(feature.id)
  );

  return (
    <>
      {isSuccess && (
        <Alert severity="success">
          Your account has been successfully created!
        </Alert>
      )}
      <Grid container spacing={2} flexDirection="column">
        <Grid item xs={8}>
          <Typography variant="h6">Name</Typography>
          <Typography>{userName}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Selected features</Typography>
          {selectedFeatures.map(({ id, name, description }) => (
            <Box key={id}>
              <Typography>{name}</Typography>
              <Typography variant="caption">{description}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
