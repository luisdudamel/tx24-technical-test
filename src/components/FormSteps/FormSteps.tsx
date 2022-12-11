import { FormStepIconsContainer, FormStepIcon } from "./FormStepsStyled";

interface formStepsProps {
  step: number;
}

const FormSteps = ({ step }: formStepsProps): JSX.Element => {
  return (
    <FormStepIconsContainer>
      <FormStepIcon>
        Personal Details
        <img
          src={`img/step-${step >= 1 ? "" : "un"}checked.svg`}
          alt="Checkmark on icon"
          width={40}
        />
      </FormStepIcon>
      <FormStepIcon>
        Document Upload{" "}
        <img
          src={`img/step-${step >= 2 ? "" : "un"}checked.svg`}
          alt="Checkmark on icon"
          width={40}
        />
      </FormStepIcon>
      <FormStepIcon>
        Your Paying Wallet{" "}
        <img
          src={`img/step-${step >= 3 ? "" : "un"}checked.svg`}
          alt="Checkmark on icon"
          width={40}
        />
      </FormStepIcon>
    </FormStepIconsContainer>
  );
};

export default FormSteps;
