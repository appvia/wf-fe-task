export type Step = {
  label: string;
  content: React.ReactNode;
};

export type WizardProps = {
  steps: Step[];
};
