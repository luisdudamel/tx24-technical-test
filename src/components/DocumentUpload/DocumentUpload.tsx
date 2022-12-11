import { useRef, useState } from "react";
import Button from "../Button/Button";
import FormSteps from "../FormSteps/FormSteps";
import {
  DocumentDesktopUploadContainer,
  DocumentDesktopUploader,
  DocumentDesktopUploadInformation,
  DocumentUploadContainer,
  DocumentUploader,
  DocumentUploadInformation,
} from "./DocumentUploadStyled";

interface documentUploadProps {
  document: string;
  setStep: (step: number) => void;
  width: number;
}

const DocumentUpload = ({
  document,
  setStep,
  width,
}: documentUploadProps): JSX.Element => {
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
    <>
      {width <= 768 ? (
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
              Upload here your {document} copy{" "}
              {document === "National Card" ? "(Front side)" : null}
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
                <label hidden htmlFor="frontdocument">
                  Document Front
                </label>
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
          {document === "National Card" ? (
            <DocumentUploader>
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
                  <label hidden htmlFor="backdocument">
                    Document Back
                  </label>
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
            setStep={setStep}
            step={4}
          ></Button>
        </DocumentUploadContainer>
      ) : (
        <DocumentDesktopUploadContainer>
          <FormSteps step={3} />
          <DocumentDesktopUploadInformation>
            To avoid delays when verifying account, please make sure of:
          </DocumentDesktopUploadInformation>
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
          <DocumentDesktopUploader>
            <p className="documentUpload__selector--information">
              Upload here your {document} copy{" "}
              {document === "National Card" ? "(Front side)" : null}
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
                <label hidden htmlFor="frontdocument">
                  Document Front
                </label>
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
          </DocumentDesktopUploader>
          {document === "National Card" ? (
            <DocumentDesktopUploader>
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
                  <label hidden htmlFor="backdocument">
                    Document Back
                  </label>
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
            </DocumentDesktopUploader>
          ) : null}

          <Button
            buttonClass="formButton"
            buttonText="NEXT STEP"
            buttonType="submit"
            isDisabled={currentDocuments?.frontdocument === ""}
            reference={inputRef}
            setStep={setStep}
            step={4}
          ></Button>
        </DocumentDesktopUploadContainer>
      )}
    </>
  );
};

export default DocumentUpload;
