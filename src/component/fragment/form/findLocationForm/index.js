import { useForm, Controller, useFieldArray } from "react-hook-form";
import Input from "component/base/input";
import Select from "component/base/select";
import Button from "component/base/button/button";
import MiniButton from "component/base/button/miniButton";

import {
  Wrapper,
  WrapperInput,
  WrapperSelect,
  WrapperList,
  ListItem,
  WrapperListItem,
  WrapperButtonList,
} from "./style";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import {
  findLocationValidationLatLong,
  findLocationValidationUtm,
} from "utils/validationForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  coordinateState,
  coordinateMarkers,
  coordinateStatStateUtm,
} from "recoil/coordinateData";
import { useRecoilState, useSetRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { getId } from "utils/general";

const FindLocationForm = ({ typeCoordinate, zoneOption, rowOptions }) => {
  const setCoordinateState = useSetRecoilState(coordinateState);
  const listCoordinateState = useRecoilValue(coordinateState);
  const setListMarkers = useSetRecoilState(coordinateMarkers);
  const resetList = useResetRecoilState(coordinateState);
  const [valueCoordinateUtm, updateValueCoordinateUtm] = useRecoilState(
    coordinateStatStateUtm
  );
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
    defaultValues: { id: "", latitude: "", longitude: "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setCoordinateState((oldState) => [
      ...oldState,
      {
        id: getId(),
        latitude: data.latitude,
        longitude: data.longitude,
      },
    ]);

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();

    //     console.log(valueCoordinate)
    //   }, 2000);
    // });
  };

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const handleDelete = (index) => {
    const newList = removeItemAtIndex(listCoordinateState, index);

    setCoordinateState(newList);
  };

  const handleToMap = () => {
    setListMarkers(() => listCoordinateState);
  };

  return (
    <div>
      <Wrapper onSubmit={handleSubmit(onSubmit)}>
        <div>
          <WrapperInput>
            <Controller
              control={control}
              name={`latitude`}
              render={({ field: { onChange } }) => (
                <Input
                  label={`${
                    typeCoordinate === "latLong" ? "Latitude" : "Easting (X)"
                  }`}
                  error={errors.latitude?.message}
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
              name={`longitude`}
              render={({ field: { onChange } }) => (
                <Input
                  label={`${
                    typeCoordinate === "latLong" ? "Longitude" : "Northing (Y)"
                  }`}
                  id="input-Lat"
                  error={errors.longitude?.message}
                  placeHolder={`${
                    typeCoordinate === "latLong"
                      ? "Exp: 106.827766"
                      : "Exp: 9315714.183"
                  }`}
                  onChange={onChange}
                />
              )}
            />
          </WrapperInput>

          {typeCoordinate === "utm" && zoneOption && (
            <WrapperSelect>
              <Controller
                control={control}
                name={`zone`}
                render={({ field: { onChange } }) => (
                  <Select
                    label="Zone"
                    id="select-zone"
                    options={zoneOption}
                    error={errors.zone?.message}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name={`row`}
                render={({ field: { onChange } }) => (
                  <Select
                    label="Row"
                    id="select-row"
                    options={rowOptions}
                    error={errors.row?.message}
                    onChange={onChange}
                  />
                )}
              />
            </WrapperSelect>
          )}
        </div>

        <Button
          label="Add Coordinate"
          variant="info"
          type="submit"
          size="large"
          icon={<AiOutlinePlus />}
          disabled={isSubmitting}
        />
      </Wrapper>
      <WrapperList>
        {listCoordinateState &&
          listCoordinateState.map((item, index) => (
            <WrapperListItem>
              <ListItem>
                {item.latitude} {item.longitude}
              </ListItem>
              <MiniButton
                variant="transparent"
                icon={<AiOutlineDelete />}
                color="#ed4f2f"
                onClick={() => handleDelete(index)}
              />
            </WrapperListItem>
          ))}
        <br />
        {listCoordinateState && listCoordinateState.length > 0 && (
          <WrapperButtonList>
            <Button
              label="Reset All"
              variant="secondary"
              type="button"
              onClick={resetList}
            />
            <Button
              label="Submit"
              variant="primary"
              type="submit"
              onClick={() => handleToMap()}
            />
          </WrapperButtonList>
        )}
      </WrapperList>
    </div>
  );
};

export default FindLocationForm;
