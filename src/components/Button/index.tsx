import './style.scss';

export interface ButtonProps {
  /** 버튼 라벨 */
  label: string;
  /** 온클릭 이벤트 */
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
