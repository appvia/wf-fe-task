import { Button } from "@mui/material";
import { WizardButtonsProps } from "./WizardButtons.types";
import { ButtonWrapper } from "./WizardButtons.styles";

export const WizardButtons: React.FC<WizardButtonsProps> = ({
  currentStep,
  setStep,
  isFirstStep,
  isLastStep,
  canProceedFurther,
  canProceedBack,
  onSubmit,
}) => {
  const onPreviousStepChange = () => {
    setStep(currentStep - 1);
  };

  const onNextStepChange = () => {
    if (isLastStep) {
      onSubmit();
    } else {
      setStep(currentStep + 1);
    }
  };

  return (
    <ButtonWrapper>
      <Button
        disabled={isFirstStep || !canProceedBack}
        onClick={onPreviousStepChange}
      >
        Previous
      </Button>
      <Button
        onClick={onNextStepChange}
        disabled={!canProceedFurther}
        variant="contained"
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </ButtonWrapper>
  );
};
