import { useForm, Controller, useFieldArray } from "react-hook-form";
import Input from "component/base/input";
import Select from "component/base/select";
import Button from "component/base/button/button";
import MiniButton from "component/base/button/miniButton";

import {
  Wrapper,
  WrapperInput,
  WrapperSelect,
  WrapperButton,
  WrapperDelete,
} from "./style";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import {
  findLocationValidationLatLong,
  findLocationValidationUtm,
} from "utils/validationForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const FindLocationForm = ({ typeCoordinate, zoneOption, rowOptions }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      typeCoordinate === "latLong"
        ? findLocationValidationLatLong
        : findLocationValidationUtm
    ),
    defaultValues: {
      coordinates: [{ latitude: "", longitude: "" }],
    },
    mode: "onChange",
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "coordinates",
  });

  const onSubmit = (data) => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(data)
      }, 2000);
    });
  };

  useEffect(() => {
    for (let i = 0; i < fields.length; i++) {
      if (i > 0) {
        return remove(i);
      }
      reset({
        coordinates: [
          {
            latitude: "",
            longitude: "",
          },
        ],
      });
    }
  }, [typeCoordinate]);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => {
        console.log(errors)
        return (
          <div key={item.id}>
            <WrapperInput>
              <Controller
                control={control}
                name={`coordinates.${index}.latitude`}
                render={({ field: { onChange } }) => (
                  <Input
                    label={`${
                      typeCoordinate === "latLong" ? "Latitude" : "Easting (X)"
                    }`}
                    error={errors.coordinates?.[index]?.latitude?.message}
                    id="input-Lat"
                    placeHolder={`${
                      typeCoordinate === "latLong"
                        ? "Exp: -6.187561"
                        : "Exp: 702241.350"
                    }`}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={`coordinates.${index}.longitude`}
                render={({ field: { onChange } }) => (
                  <Input
                    label={`${
                      typeCoordinate === "latLong"
                        ? "Longitude"
                        : "Northing (Y)"
                    }`}
                    id="input-Lat"
                    error={errors.coordinates?.[index]?.longitude?.message}
                    placeHolder={`${
                      typeCoordinate === "latLong"
                        ? "Exp: 106.827766"
                        : "Exp: 9315714.183"
                    }`}
                    onChange={onChange}
                  />
                )}
              />
              {fields.length > 1 && (
                <WrapperDelete>
                  <MiniButton
                    icon={<AiOutlineDelete size={18} />}
                    type="button"
                    onClick={() => remove(index)}
                    variant="transparent"
                    color="#FF5C02"
                  />
                </WrapperDelete>
              )}
            </WrapperInput>

            {typeCoordinate === "utm" && zoneOption && (
              <WrapperSelect>
                <Controller
                  control={control}
                  name={`coordinates.${index}.zone`}
                  render={({ field: { onChange } }) => (
                    <Select
                      label="Zone"
                      id="select-zone"
                      options={zoneOption}
                      error={errors.coordinates?.[index]?.zone?.message}
                      onChange={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`coordinates.${index}.row`}
                  render={({ field: { onChange } }) => (
                    <Select
                      label="Row"
                      id="select-row"
                      options={rowOptions}
                      error={errors.coordinates?.[index]?.row?.message}
                      onChange={onChange}
                    />
                  )}
                />
              </WrapperSelect>
            )}
          </div>
        );
      })}
      <Button
        label="Add Coordinate"
        variant="dash"
        type="button"
        size="large"
        icon={<AiOutlinePlus />}
        disabled={isSubmitting}
        onClick={() => append({ latitude: "", longitude: "" })}
      />
      <WrapperButton>
        <Button
          label="Submit"
          variant="primary"
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting && 'disabled'}
        />
        {/* <Button label="Reset" variant="secondary" type='button' 
        onClick={() =>{
          reset({
            latitude: "",
            longitude: "",
            row: "",
            zone: ""
          })
        }} /> */}
      </WrapperButton>
    </Wrapper>
  );
};

export default FindLocationForm;
