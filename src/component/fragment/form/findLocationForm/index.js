import Input from "component/base/input";
import Select from "component/base/select";
import Button from "component/base/button/button";

import { Wrapper, WrapperInput, WrapperSelect, WrapperButton } from "./style";

const FindLocationForm = ({ typeCoordinate, zoneOption, rowOptions }) => {
  const handleChange = (value) => {
    console.log(value.target.value);
  };

  const handleSelectZone = (value) => {
    console.log(value.target.value);
  };

  const handleSelectRow = (value) => {
    console.log(value.target.value);
  };

  return (
    <Wrapper>
      <WrapperInput>
        <Input
          label={`${typeCoordinate === "latLong" ? "Latitude" : "Easting (X)"}`}
          id="input-Lat"
          placeHolder={`${
            typeCoordinate === "latLong" ? "Exp: -6.187561" : "Exp: 702241.350"
          }`}
          onChange={(e) => handleChange(e)}
        />
        <Input
          label={`${
            typeCoordinate === "latLong" ? "Longitude" : "Northing (Y)"
          }`}
          id="input-Lat"
          placeHolder={`${
            typeCoordinate === "latLong"
              ? "Exp: 106.827766"
              : "Exp: 9315714.183"
          }`}
          onChange={(e) => handleChange(e)}
        />
      </WrapperInput>

      {typeCoordinate === "utm" && zoneOption && (
        <WrapperSelect>
          <Select
            label="Zone"
            id="select-zone"
            options={zoneOption}
            onChange={(e) => handleSelectZone(e)}
          />

          <Select
            label="Row"
            id="select-row"
            options={rowOptions}
            onChange={(e) => handleSelectRow(e)}
          />
        </WrapperSelect>
      )}
      <WrapperButton>
        <Button label="Submit" variant="primary" />
        <Button label="Reset" variant="secondary" />
      </WrapperButton>
    </Wrapper>
  );
};

export default FindLocationForm;
