export type WizardButtonsProps = {
  setStep: (step: number) => void;
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
};
