import { WizardProps } from "../../Wizard.types";

export type WizardButtonsProps = {
  setStep: (step: number) => void;
  currentStep: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  canProceedFurther: boolean;
  canProceedBack: boolean;
} & Pick<WizardProps, "onSubmit">;
