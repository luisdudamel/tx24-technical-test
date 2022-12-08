import React, { useEffect, useState } from "react";
import { UserData } from "../../interfaces/UserData";
import FormButton from "../Button/Button";
import {
  FormContainerStyled,
  FormInformationStyled,
  FormStyled,
} from "./FormStyled";

const Form = (): JSX.Element => {
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
    console.log(formData);
  };

  return (
    <FormContainerStyled>
      <FormInformationStyled>
        Please type carefully and fill out the form with your personal details.
        You cannot edit these details once you submitted the form.
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
        />{" "}
        <label htmlFor="address1" className="form__input-label">
          Address Line 1
        </label>
        <input
          type="text"
          id="address1"
          className="form__input-container"
          onChange={changeData}
        />{" "}
        <label htmlFor="address2" className="form__input-label">
          Address Line 2
        </label>
        <input
          type="text"
          id="address2"
          className="form__input-container"
          onChange={changeData}
        />{" "}
        <label htmlFor="country" className="form__input-label">
          Country
        </label>
        <input
          type="text"
          id="country"
          className="form__input-container"
          onChange={changeData}
        />
        <label htmlFor="province" className="form__input-label">
          Province / State
        </label>
        <input
          type="text"
          id="province"
          className="form__input-container"
          onChange={changeData}
        />
        <FormButton
          buttonType="submit"
          buttonText="NEXT STEP"
          buttonClass=""
          isDisabled={isButtonDisabled}
        />
      </FormStyled>
    </FormContainerStyled>
  );
};

export default Form;
