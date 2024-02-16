import { Button } from "./style";

const MiniButton = ({ type, icon, label, onClick, variant, color }) => {
  return (
    <Button
      type={type ? type : "button"}
      onClick={onClick}
      className={variant}
      color = {color}
    >
      {icon && icon}
      {label && label}
    </Button>
  );
};

export default MiniButton;
