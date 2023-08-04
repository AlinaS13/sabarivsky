// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import style from "./Map.module.scss";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  maxWidth: "100%",
  display: "block",
  height: "378px",
};

const center = {
  lat: 49.20987023881069,
  lng: 28.438158631324768,
};
const mapOptions = {
  mapId: import.meta.env.VITE_MAPS_ID,
  zoom: 18,
  //   center: {
  //     lat: 40,
  //     lng: -88,
  //   },
};

export const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  //   const [map, setMap] = React.useState(null);

  //   const onLoad = React.useCallback(function callback(map) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  return isLoaded ? (
    <div className={style.mapContainer}>
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={containerStyle}
        center={center}
        // zoom={16}
        // onLoad={onLoad}
        // onUnmount={onUnmount}

        //   mapId={import.meta.env.VITE_MAPS_ID}
        //   googleMapsApiKey={import.meta.env.VITE_MAPS_ID}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
