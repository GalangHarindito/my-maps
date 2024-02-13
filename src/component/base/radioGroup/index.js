import Radio from "../radio";
import { Wrapper } from "./style";

const RadioGroup = ({data, onChange, valueRadio}) => {

  return (
    <Wrapper>
      {data &&
        data.map((item) => {
          return (
            <Wrapper>
              <Radio
                id={`radio-${item.id}`}
                label={item.label}
                value={item.value}
                checked={item.value === valueRadio}
                onChange={(e) => onChange(e) }
              />
            </Wrapper>
          );
        })}
    </Wrapper>
  );
};

export default RadioGroup;
