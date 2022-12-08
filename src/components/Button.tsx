import "./button.css";

interface ButtonProps {
  buttonClass: string;
}

const Button = ({ buttonClass }: ButtonProps): JSX.Element => {
  return <button className={buttonClass}>NEXT STEP</button>;
};

export default Button;
