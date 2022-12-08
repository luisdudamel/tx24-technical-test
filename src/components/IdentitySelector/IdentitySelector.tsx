import { useState } from "react";
import Button from "../Button/Button";
import {
  IdentityContainerStyled,
  IdentityInformationStyled,
} from "./IdentitySelectorStyled";

const IdentitySelector = (): JSX.Element => {
  return (
    <IdentityContainerStyled>
      <IdentityInformationStyled>
        In order to complete this step, please upload any of the following
        personal documents
      </IdentityInformationStyled>
    </IdentityContainerStyled>
  );
};

export default IdentitySelector;
