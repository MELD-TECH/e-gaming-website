'use client';
import { useCallback } from "react";

import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 6.443444,
  lng: 7.490417,
};

const Map = () => {
  const [mapCenter, setMapCenter] = useState(center);
  const [address, setAddress] = useState<string | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

  // Function to fetch the address using Google Maps Geocoding API
const fetchAddress = useCallback(
  async (lat: number, lng: number) => {
    if (!isMapLoaded || typeof window.google === "undefined") return;

    const geocoder = new window.google.maps.Geocoder();
    const latLng = new window.google.maps.LatLng(lat, lng);

    try {
      const response = await geocoder.geocode({ location: latLng });
      if (response.results[0]) {
        setAddress(response.results[0].formatted_address);
        setErrorMessage(null); // Clear any previous error
      } else {
        setErrorMessage("No address found for this location.");
        setAddress(null); // Clear address if not found
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      setErrorMessage("Failed to fetch address. Please try again.");
      setAddress(null); // Clear address on error
    }
  },
  [isMapLoaded, setAddress, setErrorMessage] // Add dependencies here
);

  // Fetch address when map center changes
  useEffect(() => {
    if(isMapLoaded){
      fetchAddress(mapCenter.lat, mapCenter.lng);
    }
  }, [mapCenter, isMapLoaded, fetchAddress]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
        onLoad={() => setIsMapLoaded(true)}
      >
        <Marker
          position={mapCenter}
          draggable
          onDragEnd={(e) => {
            if (e.latLng) {
              const lat = e.latLng.lat();
              const lng = e.latLng.lng();
              if (!isNaN(lat) && !isNaN(lng)) {
                setMapCenter({ lat, lng });
                setIsInfoWindowOpen(true);
              } else {
                console.error("Invalid LatLng");
              }
            } else {
              console.error("LatLng is null");
            }
          }}
        />

        {/* Display InfoWindow if there's an address */}
        {address && isInfoWindowOpen && (
          <InfoWindow
            position={mapCenter}
            onCloseClick={() => setIsInfoWindowOpen(false)}
          >
            <div>
              <h3>{address}</h3>
            </div>
          </InfoWindow>
        )}

        {/* Display error message if any */}
        {errorMessage && (
          <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>
            <span>{errorMessage}</span>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
