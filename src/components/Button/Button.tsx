import "./button.css";

interface ButtonProps {
  buttonClass: string;
  buttonFunction: () => void;
  buttonText: string;
}

const FormButton = ({
  buttonClass,
  buttonFunction,
  buttonText,
}: ButtonProps): JSX.Element => {
  return (
    <button onClick={buttonFunction} className={buttonClass}>
      {buttonText}
    </button>
  );
};

export default FormButton;
