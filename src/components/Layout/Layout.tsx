import { useState } from "react";
import DocumentUpload from "../DocumentUpload/DocumentUpload";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import IdentitySelector from "../IdentitySelector/IdentitySelector";
import Wallet from "../Wallet/Wallet";
import { MainStyledContainer } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [document, setDocument] = useState<string>("");
  return (
    <MainStyledContainer>
      <Header />
      {currentStep === 1 ? <Form setStep={setCurrentStep} /> : null}
      {currentStep === 2 ? (
        <IdentitySelector setDocument={setDocument} setStep={setCurrentStep} />
      ) : null}
      {currentStep === 3 ? (
        <DocumentUpload document={document} setStep={setCurrentStep} />
      ) : null}
      {currentStep === 4 ? <Wallet /> : null}
      <Footer />
    </MainStyledContainer>
  );
};

export default Layout;
