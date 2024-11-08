import { NameForm, ReviewScreen } from "./components/Steps";
import { SelectForm } from "./components/Steps/SelectForm/SelectForm";
import { Step } from "./Wizard.types";

export const STEPS: Step[] = [
  {
    label: "Step 1",
    content: <NameForm />,
  },
  {
    label: "Step 2",
    content: <SelectForm />,
  },
  {
    label: "Step 3",
    content: <ReviewScreen />,
  },
];
