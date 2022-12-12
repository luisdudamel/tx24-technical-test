import { useState } from "react";
import Button from "../Button/Button";
import FormSteps from "../FormSteps/FormSteps";
import {
  DocumentDesktopSelector,
  DocumentSelector,
  IdentityContainerStyled,
  IdentityDesktopContainerStyled,
  IdentityDesktopInformationStyled,
  IdentityInformationStyled,
} from "./IdentitySelectorStyled";

interface identitySelectorProps {
  setStep: (step: number) => void;
  setDocument: (document: string) => void;
  width: number;
  theme: string;
}

const IdentitySelector = ({
  setStep,
  setDocument,
  width,
  theme,
}: identitySelectorProps): JSX.Element => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [activeButton, setActiveButton] = useState<string>("");

  const enableNextButton = (buttonToActivate: string): void => {
    if (activeButton === buttonToActivate) {
      setActiveButton("");
      setDocument("");
      setIsButtonDisabled(true);
      return;
    }
    setActiveButton(buttonToActivate);
    setDocument(buttonToActivate);
    setIsButtonDisabled(false);
  };

  return (
    <>
      {width <= 768 ? (
        <IdentityContainerStyled>
          <FormSteps step={2} />
          <IdentityInformationStyled>
            In order to complete this step, please upload any of the following
            personal documents
          </IdentityInformationStyled>
          <DocumentSelector>
            <Button
              buttonClass="identity"
              buttonText="Passport"
              buttonType="button"
              active={activeButton === "Passport" ? true : false}
              setActive={enableNextButton}
              isDisabled={false}
              buttonImage={<img src="img/Passport-1.svg" alt="Id Icon"></img>}
            />
            <Button
              buttonClass="identity"
              buttonText="National Card"
              buttonType="button"
              isDisabled={false}
              setActive={enableNextButton}
              active={activeButton === "National Card" ? true : false}
              buttonImage={<img src="img/id-1.svg" alt="Id Icon"></img>}
            />
            <Button
              buttonClass="identity"
              buttonText="Driver's License"
              buttonType="button"
              isDisabled={false}
              setActive={enableNextButton}
              active={activeButton === "Driver's License" ? true : false}
              buttonImage={<img src="img/license-1.svg" alt="Id Icon"></img>}
            />
          </DocumentSelector>
          <Button
            buttonClass="formButton"
            buttonText="NEXT STEP"
            buttonType="button"
            isDisabled={isButtonDisabled}
            setStep={setStep}
            step={3}
          />
        </IdentityContainerStyled>
      ) : (
        <IdentityDesktopContainerStyled>
          <FormSteps step={2} />
          <IdentityDesktopInformationStyled>
            In order to complete this step, please upload any of the following
            personal documents
          </IdentityDesktopInformationStyled>
          <DocumentDesktopSelector>
            <Button
              buttonClass="identity"
              buttonText="Passport"
              buttonType="button"
              active={activeButton === "Passport" ? true : false}
              setActive={enableNextButton}
              isDisabled={false}
              buttonImage={
                <img
                  src={`img/Passport-1${theme === "dark" ? "-dark" : ""}.svg`}
                  alt="Id Icon"
                ></img>
              }
            />
            <Button
              buttonClass="identity"
              buttonText="National Card"
              buttonType="button"
              isDisabled={false}
              setActive={enableNextButton}
              active={activeButton === "National Card" ? true : false}
              buttonImage={
                <img
                  src={`img/id-1${theme === "dark" ? "-dark" : ""}.svg`}
                  alt="Id Icon"
                ></img>
              }
            />
            <Button
              buttonClass="identity"
              buttonText="Driver's License"
              buttonType="button"
              isDisabled={false}
              setActive={enableNextButton}
              active={activeButton === "Driver's License" ? true : false}
              buttonImage={
                <img
                  src={`img/license-1${theme === "dark" ? "-dark" : ""}.svg`}
                  alt="Id Icon"
                ></img>
              }
            />
          </DocumentDesktopSelector>
          <Button
            buttonClass="formButton"
            buttonText="NEXT STEP"
            buttonType="button"
            isDisabled={isButtonDisabled}
            setStep={setStep}
            step={3}
          />
        </IdentityDesktopContainerStyled>
      )}
    </>
  );
};

export default IdentitySelector;
