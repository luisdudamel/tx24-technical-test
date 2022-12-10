import { useRef, useState } from "react";
import { DocumentUploaderData } from "../../interfaces/UserData";
import Button from "../Button/Button";
import {
  DocumentUploadContainer,
  DocumentUploader,
  DocumentUploadInformation,
} from "./DocumentUploadStyled";

interface documentUploadProps {
  document: string;
}

const DocumentUpload = ({ document }: documentUploadProps): JSX.Element => {
  const formInitialState: DocumentUploaderData = {
    front: "",
    back: "",
  };
  const inputRef = useRef(null);
  const [currentDocument, setCurrentDocument] = useState<string>(document);
  const [formData, setFormData] =
    useState<DocumentUploaderData>(formInitialState);

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
    console.log(formData);
  };
  console.log(inputRef);
  return (
    <DocumentUploadContainer>
      <DocumentUploadInformation>
        To avoid delays when verifying account, please make sure of:
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
      <DocumentUploader>
        <p className="documentUpload__selector--information">
          Upload here your passport copy
        </p>
        {inputRef && (
          <Button
            buttonClass="select"
            buttonText="SELECT"
            buttonType="submit"
            isDisabled={false}
            reference={inputRef}
          />
        )}
        <input
          ref={inputRef}
          type="file"
          name="document"
          hidden
          id="document"
          onChange={uploadImage}
        />
      </DocumentUploader>
      <Button
        buttonClass="formButton"
        buttonText="NEXT STEP"
        buttonType="submit"
        isDisabled={true}
        uploadImage={uploadImage}
        reference={inputRef}
      ></Button>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;
