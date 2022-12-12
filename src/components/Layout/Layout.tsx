import { useEffect, useState } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <MainStyledContainer>
      <Header width={width} />
      {currentStep === 1 ? (
        <Form setStep={setCurrentStep} width={width} />
      ) : null}
      {currentStep === 2 ? (
        <IdentitySelector
          width={width}
          setDocument={setDocument}
          setStep={setCurrentStep}
        />
      ) : null}
      {currentStep === 3 ? (
        <DocumentUpload
          width={width}
          document={document}
          setStep={setCurrentStep}
        />
      ) : null}
      {currentStep === 4 ? <Wallet width={width} /> : null}
      <Footer />
    </MainStyledContainer>
  );
};

export default Layout;
