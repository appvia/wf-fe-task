import { Stepper, Step, StepLabel } from "@mui/material";
import { WizardHeaderProps } from "./WizardHeader.types";

export const WizardHeader: React.FC<WizardHeaderProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <Stepper activeStep={currentStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
