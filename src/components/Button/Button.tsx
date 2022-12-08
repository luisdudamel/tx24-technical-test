import { ButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonFunction: () => void;
  buttonText: string;
}

const FormButton = ({
  buttonClass,
  buttonFunction,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={buttonFunction} className={buttonClass}>
      {buttonText}
    </ButtonStyled>
  );
};

export default FormButton;
