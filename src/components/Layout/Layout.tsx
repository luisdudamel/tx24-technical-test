import { useState } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import IdentitySelector from "../IdentitySelector/IdentitySelector";
import { MainStyledContainer } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<number>(2);
  return (
    <MainStyledContainer>
      <Header />
      {currentStep === 1 ? <Form /> : null}
      {currentStep === 2 ? <IdentitySelector /> : null}
      <Footer />
    </MainStyledContainer>
  );
};

export default Layout;
