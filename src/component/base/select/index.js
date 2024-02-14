import { Wrapper, SelectLabel, SelectInput } from "./style";

const Select = ({ label, name, options, id, onChange }) => {
  return (
    <Wrapper>
      <SelectLabel htmlFor={`${id}`}>{label}</SelectLabel>
      <SelectInput id={`${id}`} name={name} onChange={(e) => onChange(e)}>
        <option value="">Select {label}</option>
        {options &&
          options.map((item) => {
            return (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </SelectInput>
    </Wrapper>
  );
};

export default Select;
