import Button from "./components/Button/Button";

function App() {
  const buttonFunction = (): void => {
    console.log("Click");
  };

  return (
    <Button
      buttonFunction={() => buttonFunction()}
      buttonClass="form__button"
      buttonText="Next Step"
    />
  );
}

export default App;
