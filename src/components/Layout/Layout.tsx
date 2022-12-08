import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MainStyledContainer } from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <MainStyledContainer>
      <Header />
      <Footer />
    </MainStyledContainer>
  );
};

export default Layout;
