import { useState } from "react";
import RadioGroup from "component/base/radioGroup";

const FindLocation = () => {
//   const [ checked, setChecked ] = useState(false)
  const [ valueRadio, setValueRadio ] = useState('')

  const coordinatesTypes = [
    { id: 1, label: "Lat/Long", value: "latLong" },
    { id: 2, label: "UTM", value: "utm" },
  ];

  const handleChange = (value) => {
    console.log(value.target.value);
    setValueRadio(value.target.value)
    // setChecked(!checked)
  };

  return (
    <>
      <RadioGroup
        data={coordinatesTypes}
        onChange={(value) => handleChange(value)}
        valueRadio={valueRadio}
      />
    </>
  );
};

export default FindLocation;
