import { Wrapper, SelectLabel, SelectInput, ErrorMessage } from "./style";

const Select = ({ label, name, options, id, onChange, error }) => {
  return (
    <Wrapper>
      <SelectLabel htmlFor={`${id}`}>{label}</SelectLabel>
      <SelectInput id={`${id}`} name={name} onChange={(e) => onChange(e)} className={error && 'error'}>
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
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </Wrapper>
  );
};

export default Select;
