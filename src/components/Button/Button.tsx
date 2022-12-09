import { FormButtonStyled, IdentityButtonStyled } from "./ButtonStyled";

interface ButtonProps {
  buttonClass: string;
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
  isDisabled: boolean;
  buttonImage?: JSX.Element;
  active?: boolean;
  setActive?: (active: string) => void;
}

const Button = ({
  isDisabled,
  buttonClass,
  buttonType,
  buttonText,
  buttonImage,
  active,
  setActive,
}: ButtonProps): JSX.Element => {
  return (
    <>
      {buttonClass === "formButton" ? (
        <FormButtonStyled disabled={isDisabled} type={buttonType}>
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
