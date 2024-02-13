const Input = ({ label, onChange, name, id, value, disabled }) => {
  return (
    <div>
      <label disabled={disabled}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
