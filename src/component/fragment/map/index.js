import { MapContainer, TileLayer } from "react-leaflet";
import MapMarker from "component/base/marker";

const Maps = () => {
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapMarker />
      </MapContainer>
    )
}

export default Maps;