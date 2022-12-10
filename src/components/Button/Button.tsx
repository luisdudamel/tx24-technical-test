import { FormButtonStyled, IdentityButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
  buttonImage?: JSX.Element;
  active?: boolean;
  step?: number;
  setActive?: (active: string) => void;
  setStep?: (step: number) => void;
}

const Button = ({
  isDisabled,
  buttonClass,
  buttonType,
  buttonText,
  buttonImage,
  active,
  step,
  setActive,
  setStep,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {buttonClass === "formButton" ? (
        <FormButtonStyled
          disabled={isDisabled}
          type={buttonType}
          onClick={() => (setStep ? setStep(step as number) : null)}
        >
          {buttonText}
        </FormButtonStyled>
      ) : null}
      {buttonClass === "identity" ? (
        <IdentityButtonStyled
          onClick={() => (setActive ? setActive(buttonText) : null)}
          className={active ? "button__active" : ""}
          disabled={isDisabled}
          type={buttonType}
        >
          {buttonImage}
          {buttonText}
        </IdentityButtonStyled>
      ) : null}
    </>
  );
};
export default Button;
