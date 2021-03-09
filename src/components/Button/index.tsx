import './style.scss';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
