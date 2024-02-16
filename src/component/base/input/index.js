import { Wrapper, InputLabel, InputText, ErrorMessage } from "./style";

const Input = ({ label, placeHolder, onChange, name, id, value, disabled, error }) => {
  return (
    <Wrapper>
      <InputLabel htmlFor={id} disabled={disabled}>
        {label}
      </InputLabel>
      <InputText
        type="text"
        id={id}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={(e) => onChange(e)}
        disabled={disabled}
        className={error && 'error'}
      />
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </Wrapper>
  );
};

export default Input;
