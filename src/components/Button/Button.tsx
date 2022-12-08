import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
}

const FormButton = ({
  isDisabled,
  buttonClass,
  buttonType,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      type={buttonType}
      className={buttonClass}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default FormButton;
