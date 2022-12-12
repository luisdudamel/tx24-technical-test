import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { light, dark } from "./styles/Theme.styled";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
