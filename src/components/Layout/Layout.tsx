import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import { MainStyledContainer } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <MainStyledContainer>
      <Header />
      <Form />
      <Footer />
    </MainStyledContainer>
  );
};

export default Layout;
