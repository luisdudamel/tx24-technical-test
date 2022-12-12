import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { styleTheme, themeList } from "./styles/Theme.styled";

function App() {
  const [theme, setTheme] = useState<styleTheme>(themeList[1]);

  const setNewTheme = (newTheme: string) => {
    if (theme.name === "newTheme") {
      setTheme(
        themeList.find((theme) => theme.name === newTheme) as styleTheme
      );
    } else {
      setTheme(
        themeList.find((theme) => theme.name !== newTheme) as styleTheme
      );
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout themeSwitch={setNewTheme} theme={theme.name} />
      </ThemeProvider>
    </>
  );
}

export default App;
