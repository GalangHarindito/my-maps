import { RadioLabel, RadioButton, ItemRadio } from "./style";

const Radio = ({ id, label, value, checked, disabled = false, onChange }) => {

  return (
    <RadioLabel htmlFor={id} disabled={disabled}>
      <RadioButton
        id={id}
        type="radio"
        role="radio"
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
        disabled={disabled}
      />
      <ItemRadio />
      {label}
    </RadioLabel>
  );
};

export default Radio;
