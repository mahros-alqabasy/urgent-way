import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { getNearestHospital } from "../api";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLocationAccess = () => {
    setError("");
    setLoading(true);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const response = await getNearestHospital(latitude, longitude);
          const data = response.data;

          navigate("/map", {
            state: {
              routeData: {
                userLocation: [latitude, longitude],
                hospital: {
                  name: data.hospital,
                  location: data.location,
                },
                distance_km: data.distance_km,
                duration_min: data.duration_min,
                route_geometry: data.route_geometry,
              },
            },
          });
        } catch (err) {
          console.error(err);
          navigate("/not-found");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Unable to retrieve your location.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-healing-50 text-center px-6">
      <h1 className="text-4xl font-bold text-healing-700 mb-4">
        Welcome to UrgentRoute
      </h1>
      <p className="text-healing-600 mb-6">
        Instantly locate the nearest hospital and get the safest route.
      </p>
      <button
        onClick={handleLocationAccess}
        className="bg-healing-500 text-white px-6 py-3 rounded-lg hover:bg-healing-600 transition"
        disabled={loading}
      >
        {loading ? "Locating..." : "Allow Location Access"}
      </button>
      <button
        onClick={() => navigate("/choose-location")}
        className="mt-4 text-healing-600 hover:text-healing-700 text-sm underline"
      >
        Or choose a location from the map
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Home;
