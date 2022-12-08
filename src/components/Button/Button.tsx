import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonFunction: () => void;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
}

const FormButton = ({
  isDisabled,
  buttonClass,
  buttonFunction,
  buttonType,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      type={buttonType}
      onClick={buttonFunction}
      className={buttonClass}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default FormButton;
