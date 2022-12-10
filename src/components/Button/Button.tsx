import React, { RefObject } from "react";
import {
  FormButtonStyled,
  IdentityButtonStyled,
  SelectButtonStyled,
} from "./ButtonStyled";

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
  setDocument?: (document: string) => void;
  uploadImage?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reference?: RefObject<HTMLInputElement> | null | undefined;
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
  reference,
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
      {buttonClass === "select" ? (
        <SelectButtonStyled
          onClick={() => reference?.current?.click()}
          className={active ? "button__active" : ""}
          disabled={isDisabled}
          type={buttonType}
        >
          {buttonImage}
          {buttonText}
        </SelectButtonStyled>
      ) : null}
    </>
  );
};
export default Button;
