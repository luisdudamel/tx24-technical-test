import { FormButtonStyled, IdentityButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
  buttonImage?: JSX.Element;
}

const Button = ({
  isDisabled,
  buttonClass,
  buttonType,
  buttonText,
  buttonImage,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {buttonClass === "formButton" ? (
        <FormButtonStyled disabled={isDisabled} type={buttonType}>
          {buttonText}
        </FormButtonStyled>
      ) : null}
      {buttonClass === "identity" ? (
        <IdentityButtonStyled disabled={isDisabled} type={buttonType}>
          {buttonImage}
          {buttonText}
        </IdentityButtonStyled>
      ) : null}
    </>
  );
};
export default Button;
