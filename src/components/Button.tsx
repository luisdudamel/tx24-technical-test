import "./button.css";

interface ButtonProps {
  buttonClass: string;
  buttonFunction: () => void;
}

const Button = ({ buttonClass, buttonFunction }: ButtonProps): JSX.Element => {
  return (
    <button onClick={buttonFunction} className={buttonClass}>
      NEXT STEP
    </button>
  );
};

export default Button;
