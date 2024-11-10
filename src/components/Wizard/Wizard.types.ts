export type Step = {
  label: string;
  content: React.ReactNode;
  canProceedFurther: boolean;
  canProceedBack?: boolean;
  isLoading?: boolean;
};

export type WizardProps = {
  onSubmit: () => Promise<void>;
  steps: Step[];
};
