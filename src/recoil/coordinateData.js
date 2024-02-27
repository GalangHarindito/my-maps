import { atom, selector } from "recoil";
import { convert } from "utils/convert";

export const coordinateType = atom({
  key: "typeCoordinate",
  default: '',
})
export const coordinateState = atom({
  key: "coordinateState",
  default: [{ id: null, latitude: "", longitude: "" }],
});

export const coordinateStatStateUtm = atom({
  key: "coordinateStatStateUtm",
  default: [{ id: null, latitude: "", longitude: "", zone: "", row: "" }],
});

export const convertionStateUtmLatlong = selector({
  key: "convertionStateUtmLatlong",
  get: ({ get }) => {
    const coordinates = get(coordinateStatStateUtm);
    const resultConvert = coordinates.map((item) => {
      console.log(item)
      const res = convert.convertUtmToLatLng(
        Number(item.latitude),
        Number(item.longitude),
        Number(item.zone),
        item.row
      );
      return res
    });
    console.log(resultConvert)
    return resultConvert;
  },
});
