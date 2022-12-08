import { ThemeProvider } from "styled-components";
import Button from "./components/Button/Button";
import { light } from "./styles/Theme.styled";

function App() {
  const buttonFunction = (): void => {
    console.log("Click");
  };

  return (
    <ThemeProvider theme={light}>
      <Button
        buttonFunction={() => buttonFunction()}
        buttonClass="form__button"
        buttonText="Next Step"
      />
    </ThemeProvider>
  );
}

export default App;
