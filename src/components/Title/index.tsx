import './style.scss';

export interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  return <div className="Title">{label}</div>;
};

export default Title;
