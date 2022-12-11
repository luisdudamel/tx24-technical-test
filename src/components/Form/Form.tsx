import React, { useEffect, useState } from "react";
import { UserData } from "../../interfaces/UserData";
import FormButton from "../Button/Button";
import {
  FormDesktopContainerStyled,
  FormDesktopInformationStyled,
  FormDesktopStyled,
  FormStepIcon,
  FormStepIconsContainer,
} from "./FormDesktopStyled";
import {
  FormContainerStyled,
  FormInformationStyled,
  FormStyled,
} from "./FormStyled";

interface FormProps {
  setStep: (currentStep: number) => void;
}

const Form = ({ setStep }: FormProps): JSX.Element => {
  const formInitialState: UserData = {
    address1: "",
    address2: "",
    birth: "",
    country: "",
    nationality: "",
    province: "",
  };

  const [formData, setFormData] = useState<UserData>(formInitialState);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (
      formData.address1 !== "" &&
      formData.address2 !== "" &&
      formData.birth !== "" &&
      formData.country !== "" &&
      formData.nationality !== "" &&
      formData.province !== ""
    ) {
      setIsButtonDisabled(false);
      return;
    }

    setIsButtonDisabled(true);
  }, [
    formData.address1,
    formData.address2,
    formData.birth,
    formData.country,
    formData.nationality,
    formData.province,
  ]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData(formInitialState);
    setStep(2);
  };

  return (
    <>
      <FormContainerStyled>
        <FormInformationStyled>
          Please type carefully and fill out the form with your personal
          details. You cannot edit these details once you submitted the form.
        </FormInformationStyled>
        <FormStyled onSubmit={handleFormSubmit}>
          <label htmlFor="first name" className="form__input-label">
            First Name
          </label>
          <input
            type="text"
            id="first name"
            className="form__input-container-disabled"
            placeholder="Info from registration form"
            disabled
          />
          <label htmlFor="last name" className="form__input-label">
            Last Name
          </label>
          <input
            type="text"
            id="last name"
            className="form__input-container-disabled"
            placeholder="Info from registration form"
            disabled
          />
          <label htmlFor="email" className="form__input-label">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="form__input-container-disabled"
            placeholder="Info from registration form"
            disabled
          />
          <label htmlFor="phone number" className="form__input-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phone number"
            className="form__input-container-disabled"
            placeholder="Info from registration form"
            disabled
          />
          <label htmlFor="birth" className="form__input-label">
            Date of Birth
          </label>
          <input
            type="text"
            id="birth"
            className="form__input-container"
            onChange={changeData}
            value={formData.birth}
          />
          <FormInformationStyled className="form__address">
            Your address
          </FormInformationStyled>
          <label htmlFor="nationality" className="form__input-label">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            className="form__input-container"
            onChange={changeData}
            value={formData.nationality}
          />{" "}
          <label htmlFor="address1" className="form__input-label">
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            className="form__input-container"
            onChange={changeData}
            value={formData.address1}
          />{" "}
          <label htmlFor="address2" className="form__input-label">
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            className="form__input-container"
            onChange={changeData}
            value={formData.address2}
          />{" "}
          <label htmlFor="country" className="form__input-label">
            Country
          </label>
          <input
            type="text"
            id="country"
            className="form__input-container"
            onChange={changeData}
            value={formData.country}
          />
          <label htmlFor="province" className="form__input-label">
            Province / State
          </label>
          <input
            type="text"
            id="province"
            className="form__input-container"
            onChange={changeData}
            value={formData.province}
          />
          <FormButton
            buttonType="submit"
            buttonText="NEXT STEP"
            buttonClass="formButton"
            isDisabled={isButtonDisabled}
          />
        </FormStyled>
      </FormContainerStyled>
      <FormDesktopContainerStyled>
        <FormStepIconsContainer>
          <FormStepIcon>
            Personal Details
            <img src="img/step-checked.svg" alt="Checkmark on icon" />
          </FormStepIcon>
          <FormStepIcon>Document Upload</FormStepIcon>
          <FormStepIcon>Your Paying Wallet</FormStepIcon>
        </FormStepIconsContainer>
        <FormDesktopInformationStyled>
          Please type carefully and fill out the form with your personal
          details. You cannot edit these details once you submitted the form.
        </FormDesktopInformationStyled>
        <FormDesktopStyled onSubmit={handleFormSubmit}>
          <div className="personal__details">
            <div>
              <label htmlFor="first name" className="form__input-label">
                First Name
              </label>
              <input
                type="text"
                id="first name"
                className="form__input-container-disabled"
                placeholder="Info from registration form"
                disabled
              />
              <label htmlFor="email" className="form__input-label">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="form__input-container-disabled"
                placeholder="Info from registration form"
                disabled
              />
              <label htmlFor="birth" className="form__input-label">
                Date of Birth
              </label>
              <input
                type="text"
                id="birth"
                className="form__input-container"
                onChange={changeData}
                value={formData.birth}
              />
            </div>
            <div>
              <label htmlFor="last name" className="form__input-label">
                Last Name
              </label>
              <input
                type="text"
                id="last name"
                className="form__input-container-disabled"
                placeholder="Info from registration form"
                disabled
              />

              <label htmlFor="phone number" className="form__input-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone number"
                className="form__input-container-disabled"
                placeholder="Info from registration form"
                disabled
              />
            </div>
          </div>
          <FormDesktopInformationStyled className="form__address">
            Your address
          </FormDesktopInformationStyled>
          <div className="address">
            <div>
              <label htmlFor="address1" className="form__input-label">
                Address Line 1
              </label>
              <input
                type="text"
                id="address1"
                className="form__input-container"
                onChange={changeData}
                value={formData.address1}
              />{" "}
              <label htmlFor="country" className="form__input-label">
                Country
              </label>
              <input
                type="text"
                id="country"
                className="form__input-container"
                onChange={changeData}
                value={formData.country}
              />
              <label htmlFor="nationality" className="form__input-label">
                Nationality
              </label>
              <input
                type="text"
                id="nationality"
                className="form__input-container"
                onChange={changeData}
                value={formData.nationality}
              />{" "}
            </div>
            <div>
              <label htmlFor="address2" className="form__input-label">
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                className="form__input-container"
                onChange={changeData}
                value={formData.address2}
              />{" "}
              <label htmlFor="province" className="form__input-label">
                Province / State
              </label>
              <input
                type="text"
                id="province"
                className="form__input-container"
                onChange={changeData}
                value={formData.province}
              />
            </div>
          </div>
          <FormButton
            buttonType="submit"
            buttonText="NEXT STEP"
            buttonClass="formButton"
            isDisabled={isButtonDisabled}
          />
        </FormDesktopStyled>
      </FormDesktopContainerStyled>
    </>
  );
};

export default Form;
