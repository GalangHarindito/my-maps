import { ButtonStyle } from "./style";

const Button = ({
  loading,
  label,
  onClick,
  name,
  id,
  type,
  variant,
  size,
  icon,
  disabled
}) => {
  return (
    <ButtonStyle
      type={type}
      name={name}
      id={id}
      className={[variant, size ? size : "", disabled].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon} 
      {loading ? "Loading.." : label}
    </ButtonStyle>
  );
};

export default Button;
