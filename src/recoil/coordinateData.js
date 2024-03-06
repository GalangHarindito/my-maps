import { atom, selector } from "recoil";
import { convert } from "utils/convert";

export const coordinateType = atom({
  key: "typeCoordinate",
  default: '',
})
export const coordinateState = atom({
  key: "coordinateState",
  default: [],
});

export const coordinateStatStateUtm = atom({
  key: "coordinateStatStateUtm",
  default: [{ id: null, latitude: "", longitude: "", zone: "", row: "" }],
});

export const coordinateMarkers = atom({
  key: "coordinateMarkers",
  default: []
})

export const convertionStateUtmLatlong = selector({
  key: "convertionStateUtmLatlong",
  get: ({ get }) => {
    const coordinates = get(coordinateStatStateUtm);
    const resultConvert = coordinates.map((item) => {
      let res = {}
      const objCoordinate = convert.convertUtmToLatLng(
        Number(item.latitude),
        Number(item.longitude),
        Number(item.zone),
        item.row
      );
      
      return objCoordinate
    });
    return resultConvert;
  },
});

export const coordinateListState = selector({
  key: "coordinateListState",
  get:({get}) => {
     
  }
})
