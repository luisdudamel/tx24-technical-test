import {
  FormContainerStyled,
  FormInformationStyled,
  FormStyled,
} from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormContainerStyled>
      <FormInformationStyled>
        Please type carefully and fill out the form with your personal details.
        You cannot edit these details once you submitted the form.
      </FormInformationStyled>
      <FormStyled>
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
        <label htmlFor="email address" className="form__input-label">
          Email Address
        </label>
        <input
          type="text"
          id="first name"
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
        <label htmlFor="birth date" className="form__input-label">
          Date of Birth
        </label>
        <input type="text" id="birth date" className="form__input-container" />
        <FormInformationStyled className="form__address">
          Your address
        </FormInformationStyled>
        <label htmlFor="nationality" className="form__input-label">
          Nationality
        </label>
        <input type="text" id="nationality" className="form__input-container" />{" "}
        <label htmlFor="address 1" className="form__input-label">
          Address Line 1
        </label>
        <input type="text" id="address 2" className="form__input-container" />{" "}
        <label htmlFor="address 2" className="form__input-label">
          Address Line 2
        </label>
        <input type="text" id="country" className="form__input-container" />{" "}
        <label htmlFor="country" className="form__input-label">
          Country
        </label>
        <input type="text" id="address 2" className="form__input-container" />
        <label htmlFor="province" className="form__input-label">
          Province / State
        </label>
        <input type="text" id="province" className="form__input-container" />
      </FormStyled>
    </FormContainerStyled>
  );
};

export default Form;
