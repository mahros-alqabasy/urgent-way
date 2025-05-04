import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
  Tooltip,
  useMap,
} from "react-leaflet";
import axios from "axios";
import { getNearestHospital } from "../api";

import { Polygon } from "react-leaflet";

// World bounds (giant box)
const worldBounds = [
  [
    [-90, -180],
    [-90, 180],
    [90, 180],
    [90, -180],
  ],
];

// US bounds (simplified rectangle — adjust if needed)
const usBounds = [
  [24.396308, -125.0],
  [49.384358, -66.93457],
];

// Create a mask by defining an outer polygon minus inner hole (U.S.)
const maskedPolygon = [
  worldBounds[0],
  [
    [usBounds[0][0], usBounds[0][1]],
    [usBounds[1][0], usBounds[0][1]],
    [usBounds[1][0], usBounds[1][1]],
    [usBounds[0][0], usBounds[1][1]],
  ],
];

// Custom Icons
const iconUser = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/10607/10607135.png ",
  iconSize: [35, 35],
  iconAnchor: [17, 10],
  popupAnchor: [0, -30],
});

const iconHospital = new L.Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
  // iconUrl: "https://cdn-icons-png.flaticon.com/128/8145/8145721.png",
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131546.png",
  iconSize: [35, 35],
  iconAnchor: [17, 10],
  popupAnchor: [0, -30],
});

// Fit map to route bounds
const FitBounds = ({ geometry }) => {
  const map = useMap();

  useEffect(() => {
    if (!geometry?.coordinates) return;
    const coords = geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds);
  }, [geometry, map]);

  return null;
};

const MapView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [routeData, setRouteData] = useState(location.state?.routeData || null);

  // If only userLocation is provided, fetch full route data
  useEffect(() => {
    const fetchRoute = async () => {
      if (routeData?.userLocation && !routeData?.hospital) {
        try {
          const [lat, lon] = routeData.userLocation;

          const res = await getNearestHospital(lat, lon);

          const data = res;
          setRouteData({
            userLocation: [lat, lon],
            hospital: {
              name: data.hospital,
              location: data.location,
            },
            distance_km: data.distance_km,
            duration_min: data.duration_min,
            route_geometry: data.route_geometry,
          });
        } catch (err) {
          console.error("Error fetching route:", err);
          navigate("/not-found");
        }
      }
    };

    fetchRoute();
  }, [routeData, navigate]);

  if (!routeData) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading route...
      </div>
    );
  }

  const { userLocation, hospital, distance_km, duration_min, route_geometry } =
    routeData;

  return (
    <div className="h-screen w-full relative">
      {/* Masked overlay */}

      {/* <MapContainer center={userLocation} zoom={14} className="h-full w-full"> */}
      <MapContainer
        center={[37.0902, -95.7129]} // U.S. center
        zoom={5}
        minZoom={4}
        maxZoom={18}
        maxBounds={[
          [24.396308, -125.0],
          [49.384358, -66.93457],
        ]} // SW and NE corners of continental U.S.
        maxBoundsViscosity={1.0}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <Polygon
          positions={maskedPolygon}
          pathOptions={{
            fillColor: "#000",
            fillOpacity: 0.4,
            stroke: false,
          }}
        />
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={userLocation} icon={iconUser}>
          <Popup>You are here</Popup>
          <Tooltip direction="top" offset={[0, -10]} permanent>
            Your Location
          </Tooltip>
        </Marker>

        {hospital && (
          <Marker position={hospital.location} icon={iconHospital}>
            <Popup>{hospital.name}</Popup>
            <Tooltip direction="top" offset={[0, -10]} permanent>
              Nearest Hospital
            </Tooltip>
          </Marker>
        )}

        {route_geometry && (
          <>
            <GeoJSON
              data={{
                type: "Feature",
                geometry: route_geometry,
                properties: {},
              }}
              style={{
                color: "red",
                weight: 3,
                dashArray: "1", // Dashed line style
              }}
            />
            <FitBounds geometry={route_geometry} />
          </>
        )}
      </MapContainer>

      {hospital && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-lg shadow-lg text-center text-sm text-gray-800 z-[1000]">
          <p className="font-semibold">Destination: {hospital.name}</p>
          <p>Distance: {distance_km.toFixed(2)} km</p>
          <p>ETA: {duration_min.toFixed(1)} minutes</p>
        </div>
      )}
      <div className="absolute bottom-4 left-4 z-[1000]">
        <button
          onClick={() => navigate("/choose-location")}
          className="bg-white text-healing-600 border border-healing-300 hover:bg-healing-100 transition px-4 py-2 rounded-lg shadow-md text-sm"
        >
          Change Location
        </button>
      </div>
    </div>
  );
};

export default MapView;
