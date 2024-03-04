import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { useRecoilValue } from "recoil";
import { coordinateState } from "recoil/coordinateData";
import { coordinateType } from "recoil/coordinateData";
import { convertionStateUtmLatlong } from "recoil/coordinateData";

const MapMarker = () => {
  const markerData = useRecoilValue(coordinateState)
  const markerDataUtm = useRecoilValue(convertionStateUtmLatlong)

  const [ markers,setMarkers] = useState('')

  useEffect(() => {
    if(coordinateType === 'latLong'){
      setMarkers(markerData)
    }else{
      setMarkers(markerDataUtm)
    }
  }, [coordinateType])

  return (
    <>
      {markers ?
        markers.map((item) => (
          <Marker position={[item.latitude, item.longitude]}>
            <Popup>{[item.latitude, item.longitude].join(" ")}</Popup>
          </Marker>
        )) : ''}
    </>
  );
};

export default MapMarker;
