import { FormContainerStyled, FormInformationStyled } from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormContainerStyled>
      <FormInformationStyled>
        Please type carefully and fill out the form with your personal details.
        Your can’t edit these details once you submitted the form.
      </FormInformationStyled>
    </FormContainerStyled>
  );
};

export default Form;
