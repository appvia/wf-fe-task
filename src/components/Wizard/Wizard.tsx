import { useState } from "react";
import { WizardProps } from "./Wizard.types";
import { WizardHeader } from "./components";
import { WizardButtons } from "./components/WizardButtons";
import { ContentWrapper } from "./Wizard.styles";

export const Wizard: React.FC<WizardProps> = ({ steps }) => {
  const [step, setStep] = useState(0);
  const { content } = steps[step];
  const headerSteps: string[] = steps.map(({ label }) => {
    return label;
  });

  return (
    <section>
      <WizardHeader steps={headerSteps} setStep={setStep} currentStep={step} />
      <ContentWrapper>{content}</ContentWrapper>
      <WizardButtons
        setStep={setStep}
        currentStep={step}
        isFirstStep={step === 0}
        isLastStep={step === steps.length - 1}
      />
    </section>
  );
};
