import Button from "./components/Button";

function App() {
  const buttonFunction = (): void => {
    console.log("Click");
  };

  return (
    <Button
      buttonFunction={() => buttonFunction()}
      buttonClass="form__button"
    />
  );
}

export default App;
