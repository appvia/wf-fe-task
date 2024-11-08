import { Stepper, Step, StepLabel } from "@mui/material";
import { WizardHeaderProps } from "./WizardHeader.types";

export const WizardHeader: React.FC<WizardHeaderProps> = ({
  currentStep,
  steps,
  setStep,
}) => {
  return (
    // <div>
    //   {steps.map((label, index) => {
    //     return <button onClick={() => setStep(index)}>{label}</button>;
    //   })}
    // </div>
    <Stepper activeStep={currentStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
