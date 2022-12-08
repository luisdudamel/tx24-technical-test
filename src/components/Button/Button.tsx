import { FormButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
}

const Button = ({
  isDisabled,
  buttonClass,
  buttonType,
  buttonText,
}: ButtonProps): JSX.Element => {
  return buttonClass === "formButton" ? (
    <FormButtonStyled disabled={isDisabled} type={buttonType}>
      {buttonText}
    </FormButtonStyled>
  ) : (
    <></>
  );
};

export default Button;
