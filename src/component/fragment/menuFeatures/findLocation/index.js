import { useState } from "react";
import RadioGroup from "component/base/radioGroup";
import FindLocationForm from "component/fragment/form/findLocationForm";
import { Wrapper } from "./style";

const FindLocation = () => {
  const [valueRadio, setValueRadio] = useState("latLong");

  const coordinatesTypes = [
    { id: 1, label: "Lat/Long", value: "latLong" },
    { id: 2, label: "UTM", value: "utm" },
  ];

  const newArray = new Array(60).fill("");
  const zoneOption = newArray.map((item, index) => {
    newArray[item] = { id: index + 1, value: index + 1, label: index + 1 };
    return newArray[item];
  });

  const rowOptions = [
    { id: 1, value: "A", label: "A" },
    { id: 2, value: "B", label: "B" },
    { id: 3, value: "C", label: "C" },
    { id: 4, value: "D", label: "D" },
    { id: 5, value: "E", label: "E" },
    { id: 6, value: "F", label: "F" },
    { id: 7, value: "G", label: "G" },
    { id: 8, value: "H", label: "H" },
    { id: 9, value: "I", label: "I" },
    { id: 10, value: "J", label: "J" },
    { id: 11, value: "K", label: "K" },
    { id: 12, value: "L", label: "L" },
    { id: 13, value: "M", label: "M" },
    { id: 14, value: "N", label: "N" },
    { id: 15, value: "O", label: "O" },
    { id: 16, value: "P", label: "P" },
    { id: 17, value: "Q", label: "Q" },
    { id: 18, value: "R", label: "R" },
    { id: 19, value: "S", label: "S" },
    { id: 20, value: "T", label: "T" },
    { id: 21, value: "U", label: "U" },
    { id: 22, value: "V", label: "V" },
    { id: 23, value: "W", label: "W" },
    { id: 24, value: "X", label: "X" },
  ];

  const handleChange = (value) => {
    setValueRadio(value.target.value);
  };

  return (
    <Wrapper>
      <RadioGroup
        data={coordinatesTypes}
        onChange={(value) => handleChange(value)}
        valueRadio={valueRadio}
      />
      <FindLocationForm
        typeCoordinate={valueRadio}
        zoneOption={zoneOption}
        rowOptions={rowOptions}
      />
    </Wrapper>
  );
};

export default FindLocation;
