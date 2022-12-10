import { useRef, useState } from "react";
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
  const inputRef = useRef(null);
  const backInputRef = useRef(null);
  const [currentDocuments, setCurrentDocuments] = useState({
    frontdocument: "",
    backdocument: "",
  });
  const [formData, setFormData] = useState({});

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.files?.[0] || "",
    });
    setCurrentDocuments({
      ...currentDocuments,
      [event.target.id]: event.target.files?.[0]?.name,
    });
  };

  const clearFormData = (documentSide: string) => {
    if (documentSide === "front") {
      setCurrentDocuments({
        frontdocument: "",
        backdocument: currentDocuments.backdocument,
      });
    }
    if (documentSide === "back") {
      setCurrentDocuments({
        frontdocument: currentDocuments.frontdocument,
        backdocument: "",
      });
    }
    setFormData({});
  };

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
      {document === "Passport" ? (
        <DocumentUploader>
          <p className="documentUpload__selector--information">
            Upload here your {document} copy
          </p>
          {currentDocuments?.frontdocument === "" ? (
            <>
              <Button
                buttonClass="select"
                buttonText="SELECT"
                buttonType="submit"
                isDisabled={false}
                reference={inputRef}
              />
              <input
                ref={inputRef}
                type="file"
                name="frontdocument"
                hidden
                id="frontdocument"
                onChange={uploadImage}
              />
            </>
          ) : (
            <div className="documentUpload__selector__filenameContainer">
              <p>{currentDocuments?.frontdocument}</p>
              <button onClick={() => clearFormData("front")}>X</button>
            </div>
          )}
        </DocumentUploader>
      ) : null}
      {document === "Driver's License" ? (
        <DocumentUploader>
          <p className="documentUpload__selector--information">
            Upload here your {document} copy (Front side)
          </p>
          {currentDocuments?.frontdocument === "" ? (
            <>
              <Button
                buttonClass="select"
                buttonText="SELECT"
                buttonType="submit"
                isDisabled={false}
                reference={inputRef}
              />
              <input
                ref={inputRef}
                type="file"
                name="frontdocument"
                hidden
                id="frontdocument"
                onChange={uploadImage}
              />
            </>
          ) : (
            <div className="documentUpload__selector__filenameContainer">
              <p>{currentDocuments?.frontdocument}</p>
              <button onClick={() => clearFormData("front")}>X</button>
            </div>
          )}
        </DocumentUploader>
      ) : null}
      {document === "National Card" ? (
        <DocumentUploader>
          <p className="documentUpload__selector--information">
            Upload here your {document} copy (Front side)
          </p>
          {currentDocuments?.frontdocument === "" ? (
            <>
              <Button
                buttonClass="select"
                buttonText="SELECT"
                buttonType="submit"
                isDisabled={false}
                reference={inputRef}
              />
              <input
                ref={inputRef}
                type="file"
                name="frontdocument"
                hidden
                id="frontdocument"
                onChange={uploadImage}
              />
            </>
          ) : (
            <div className="documentUpload__selector__filenameContainer">
              <p>{currentDocuments?.frontdocument}</p>
              <button onClick={() => clearFormData("front")}>X</button>
            </div>
          )}
          <p className="documentUpload__selector--information">
            Upload here your {document} copy (Back side)
          </p>
          {currentDocuments?.backdocument === "" ? (
            <>
              <Button
                buttonClass="select"
                buttonText="SELECT"
                buttonType="submit"
                isDisabled={false}
                reference={backInputRef}
              />
              <input
                ref={backInputRef}
                type="file"
                name="backdocument"
                hidden
                id="backdocument"
                onChange={uploadImage}
              />
            </>
          ) : (
            <div className="documentUpload__selector__filenameContainer">
              <p>{currentDocuments?.backdocument}</p>
              <button onClick={() => clearFormData("back")}>X</button>
            </div>
          )}
        </DocumentUploader>
      ) : null}
      <Button
        buttonClass="formButton"
        buttonText="NEXT STEP"
        buttonType="submit"
        isDisabled={currentDocuments?.frontdocument === ""}
        reference={inputRef}
      ></Button>
    </DocumentUploadContainer>
  );
};

export default DocumentUpload;
