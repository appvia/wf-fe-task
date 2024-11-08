export type WizardHeaderProps = {
  steps: string[];
  setStep: (step: number) => void;
  currentStep: number;
};
