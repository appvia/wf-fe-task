import { useMemo } from "react";
import { Wizard } from "../../components";
import {
  UserNameForm,
  FeatureSelectList,
  ReviewScreen,
} from "../../components/Wizard/components/WizardSteps";
import { Step } from "../../components/Wizard/Wizard.types";
import {
  useUserInfo,
  useSelectedFeatures,
  useInfoSubmitted,
} from "../../hooks";
import { FEATURE_OPTIONS } from "../../components/Wizard/components/WizardSteps/FeatureSelectList/FeatureSelectList.constant";

export const Home: React.FC = () => {
  const { isSuccess: isNameValid } = useUserInfo();
  const { selectedFeatureIds } = useSelectedFeatures();
  const {
    onFinalSubmit,
    isSuccess: isFinalSubmitSuccessful,
    isLoading,
  } = useInfoSubmitted();
  const STEPS: Step[] = useMemo(
    () => [
      {
        label: "Insert your name",
        content: <UserNameForm />,
        canProceedFurther: isNameValid,
      },
      {
        label: "Choose your features",
        content: <FeatureSelectList options={FEATURE_OPTIONS} />,
        canProceedFurther: selectedFeatureIds.length > 0,
      },
      {
        label: "Create your account",
        content: <ReviewScreen />,
        canProceedFurther: !isFinalSubmitSuccessful,
        canProceedBack: !isFinalSubmitSuccessful,
        isLoading,
      },
    ],
    [isNameValid, selectedFeatureIds.length, isFinalSubmitSuccessful, isLoading]
  );
  return <Wizard steps={STEPS} onSubmit={() => onFinalSubmit()} />;
};
