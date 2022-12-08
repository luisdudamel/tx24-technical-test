import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonFunction: () => void;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
}

const FormButton = ({
  buttonClass,
  buttonFunction,
  buttonType,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      type={buttonType}
      onClick={buttonFunction}
      className={buttonClass}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default FormButton;
