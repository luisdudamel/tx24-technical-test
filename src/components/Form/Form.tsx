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
          className="form__input-container"
          placeholder="Info from registration form"
          disabled
        />
        <label htmlFor="last name" className="form__input-label">
          Last Name
        </label>
        <input
          type="text"
          id="last name"
          className="form__input-container"
          placeholder="Info from registration form"
          disabled
        />
        <label htmlFor="email address" className="form__input-label">
          Email Address
        </label>
        <input
          type="text"
          id="first name"
          className="form__input-container"
          placeholder="Info from registration form"
          disabled
        />
        <label htmlFor="phone number" className="form__input-label">
          Phone Number
        </label>
        <input
          type="text"
          id="phone number"
          className="form__input-container"
          placeholder="Info from registration form"
          disabled
        />
      </FormStyled>
    </FormContainerStyled>
  );
};

export default Form;
