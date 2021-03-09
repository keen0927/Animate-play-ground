import './style.scss';

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="Button" type="button">
      {label}
    </button>
  );
};

export default Button;
