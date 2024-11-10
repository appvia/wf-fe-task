import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SelectFormProps } from "./FeatureSelectList.types";
import { useSelectedFeatures } from "../../../../../hooks/useSelectedFeatures";

export const FeatureSelectList: React.FC<SelectFormProps> = ({ options }) => {
  const { selectedFeatureIds, updateSelectedFeatures } = useSelectedFeatures();

  const handleToggle = (featureId: string) => {
    if (selectedFeatureIds.includes(featureId)) {
      updateSelectedFeatures(
        selectedFeatureIds.filter((id) => id !== featureId)
      );
    } else {
      updateSelectedFeatures([...selectedFeatureIds, featureId]);
    }
  };

  return (
    <List>
      {options.map(({ id, name, description }) => (
        <ListItem key={id} onClick={() => handleToggle(id)}>
          <ListItemIcon>
            <Checkbox checked={selectedFeatureIds.includes(id)} />
          </ListItemIcon>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      ))}
    </List>
  );
};
