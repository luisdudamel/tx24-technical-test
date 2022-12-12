import { FormStepIconsContainer, FormStepIcon } from "./FormStepsStyled";

interface formStepsProps {
  step: number;
}

const FormSteps = ({ step }: formStepsProps): JSX.Element => {
  return (
    <FormStepIconsContainer>
      <FormStepIcon>
        Personal Details
        <div className={`step__icon__${step >= 1 ? "" : "un"}checked`}></div>
      </FormStepIcon>
      <FormStepIcon>
        Document Selection{" "}
        <div className={`step__icon__${step >= 2 ? "" : "un"}checked`}></div>
      </FormStepIcon>
      <FormStepIcon>
        Document Upload{" "}
        <div className={`step__icon__${step >= 3 ? "" : "un"}checked`}></div>
      </FormStepIcon>
      <FormStepIcon>
        Your Paying Wallet{" "}
        <div className={`step__icon__${step >= 4 ? "" : "un"}checked`}></div>
      </FormStepIcon>
    </FormStepIconsContainer>
  );
};

export default FormSteps;
