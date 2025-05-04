import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Navbar from "../components/Navbar";

// Custom icon
const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
});

const LocationMarker = ({ position, setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position ? (
    <Marker
      position={position}
      icon={icon}
      draggable
      eventHandlers={{
        dragend: (e) => {
          const newPos = e.target.getLatLng();
          setPosition([newPos.lat, newPos.lng]);
        },
      }}
    />
  ) : null;
};

const ChooseLocation = () => {
  const [position, setPosition] = useState([40.758, -73.9855]); // Default to NYC
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!search) return;
    // const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    const url = `https://nominatim.openstreetmap.org/search?format=json&countrycodes=us&q=${encodeURIComponent(
      search
    )}`;

    const res = await fetch(url);
    const data = await res.json();
    if (data && data.length > 0) {
      setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
    }
  };

  const handleSubmit = () => {
    navigate("/map", {
      state: {
        routeData: {
          userLocation: position,
        },
      },
    });
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 bg-healing-50 border-b flex gap-2 justify-center items-center">
        <input
          type="text"
          placeholder="Search location..."
          className="border px-4 py-2 rounded w-2/3 max-w-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-healing-500 text-white px-4 py-2 rounded hover:bg-healing-600"
        >
          Search
        </button>
      </div>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="flex-1"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>

      <div className="p-4 bg-white border-t flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-healing-500 text-white px-6 py-3 rounded hover:bg-healing-600"
        >
          Use This Location
        </button>
      </div>
    </div>
  );
};

export default ChooseLocation;
