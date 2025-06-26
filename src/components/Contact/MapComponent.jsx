import { GoogleMap, Marker } from "@react-google-maps/api";
import { useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "480px",
};

const location = {
  lat: -12.1457007533793,
  lng: -77.02168439448052,
};

const MapComponent = () => {
  const mapRef = useRef(null);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={18}
      onLoad={(map) => (mapRef.current = map)}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default MapComponent;
