import { useEffect, useState } from "react";
import DocumentUpload from "../DocumentUpload/DocumentUpload";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import IdentitySelector from "../IdentitySelector/IdentitySelector";
import Wallet from "../Wallet/Wallet";
import { MainStyledContainer } from "./LayoutStyled";

interface layoutProps {
  theme: string;
}

const Layout = ({ theme }: layoutProps): JSX.Element => {
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
      <Header theme={theme} width={width} />
      {currentStep === 1 ? (
        <Form setStep={setCurrentStep} width={width} />
      ) : null}
      {currentStep === 2 ? (
        <IdentitySelector
          theme={theme}
          width={width}
          setDocument={setDocument}
          setStep={setCurrentStep}
        />
      ) : null}
      {currentStep === 3 ? (
        <DocumentUpload
          theme={theme}
          width={width}
          document={document}
          setStep={setCurrentStep}
        />
      ) : null}
      {currentStep === 4 ? <Wallet theme={theme} width={width} /> : null}
      <Footer theme={theme} />
    </MainStyledContainer>
  );
};

export default Layout;
