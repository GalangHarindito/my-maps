import { useRecoilValue } from "recoil";
import { coordinateState, coordinateType } from "recoil/coordinateData";

const MapPolygon = () => {
  const value = useRecoilValue(coordinateState);
  const valueType = useRecoilValue(coordinateType)
  return (
    <>
      <p>{JSON.stringify(valueType)}</p>
    </>
  );
};

export default MapPolygon;
