import { useState } from "react";
import Button from "../Button/Button";
import {
  DocumentSelector,
  IdentityContainerStyled,
  IdentityInformationStyled,
} from "./IdentitySelectorStyled";

const IdentitySelector = (): JSX.Element => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  return (
    <IdentityContainerStyled>
      <IdentityInformationStyled>
        In order to complete this step, please upload any of the following
        personal documents
      </IdentityInformationStyled>
      <DocumentSelector>
        <Button
          buttonClass="identity"
          buttonText="Passport"
          buttonType="button"
          isDisabled={false}
          buttonImage={<img src="img/Passport-1.svg" alt="Id Icon"></img>}
        />
        <Button
          buttonClass="identity"
          buttonText="National Card"
          buttonType="button"
          isDisabled={false}
          buttonImage={<img src="img/id-1.svg" alt="Id Icon"></img>}
        />

        <Button
          buttonClass="identity"
          buttonText="Driver's License"
          buttonType="button"
          isDisabled={false}
          buttonImage={<img src="img/license-1.svg" alt="Id Icon"></img>}
        />
      </DocumentSelector>
      <Button
        buttonClass="formButton"
        buttonText="NEXT STEP"
        buttonType="submit"
        isDisabled={isButtonDisabled}
      />
    </IdentityContainerStyled>
  );
};

export default IdentitySelector;
