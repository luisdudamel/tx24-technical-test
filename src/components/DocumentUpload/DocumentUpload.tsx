import Button from "../Button/Button";
import {
  DocumentUploadContainer,
  DocumentUploadInformation,
} from "./DocumentUploadStyled";

const DocumentUpload = (): JSX.Element => {
  return (
    <DocumentUploadContainer>
      <DocumentUploadInformation>
        To avoid delays when verifying account, Please make sure below:
      </DocumentUploadInformation>
      <ul className="documentUpload__list">
        <li className="documentUpload__list--item">
          Chosen credential must not be expired
        </li>
        <li className="documentUpload__list--item">
          Document should be in good condition and clearly visible
        </li>
        <li className="documentUpload__list--item">
          Make sure there is no light glare on the card
        </li>
      </ul>
      <Button
        buttonClass="formButton"
        buttonText="NEXT STEP"
        buttonType="submit"
        isDisabled={true}
      />
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;
