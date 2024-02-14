import { ButtonStyle } from "./style";

const Button = ({ loading, label, onClick, name, id, type, variant }) => {
  return (
    <ButtonStyle
      type={type}
      name={name}
      id={id}
      className={variant}
      onClick={onClick}
    >
      {loading ? "Loading.." : label }
    </ButtonStyle>
  );
};

export default Button;
