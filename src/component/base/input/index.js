import { Wrapper, InputLabel, InputText  } from "./style";

const Input = ({ label, placeHolder, onChange, name, id, value, disabled }) => {
  return (
    <Wrapper>
      <InputLabel htmlFor={id} disabled={disabled}>{label}</InputLabel>
      <InputText
        type="text"
        id={id}
        placeholder={placeHolder}
        value={value}
        name={name}     
        onChange={(e) => onChange(e)}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default Input;
