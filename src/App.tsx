import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { light, dark } from "./styles/Theme.styled";

function App() {
  const theme = "light";
  return (
    <>
      <ThemeProvider theme={light}>
        <Layout theme={theme} />
      </ThemeProvider>
    </>
  );
}

export default App;
