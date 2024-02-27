import { Marker, Popup } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { coordinateState } from "recoil/coordinateData";

const MapMarker = () => {
    const markerData = useRecoilValue(coordinateState)
  return (
    <>
      {markerData ?
        markerData.map((item) => (
          <Marker position={[item.latitude, item.longitude]}>
            <Popup>{[item.latitude, item.longitude].join(" ")}</Popup>
          </Marker>
        )) : ''}
    </>
  );
};

export default MapMarker;
