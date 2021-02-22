import './style.scss';

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="Button" type="button">
      {children}
    </button>
  );
};

export default Button;
