import { Box, Button } from "@mui/material";
import { WizardButtonsProps } from "./WizardButtons.types";
import { ButtonWrapper } from "./WizardButtons.styles";

export const WizardButtons: React.FC<WizardButtonsProps> = ({
  currentStep,
  setStep,
  isFirstStep,
  isLastStep,
}) => {
  const onPreviousStepChange = () => {
    setStep(currentStep - 1);
  };

  const onNextStepChange = () => {
    if (isLastStep) {
      console.log("hello");
    } else {
      setStep(currentStep + 1);
    }
  };

  return (
    <ButtonWrapper>
      <Button disabled={isFirstStep} onClick={onPreviousStepChange}>
        Previous
      </Button>
      <Button onClick={onNextStepChange}>
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </ButtonWrapper>
  );
};
