import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const getNearestHospital = async (lat, lon) => {
  const response = await api.get("/nearest-hospital", {
    params: { lat, lon },
  });
  return response.data;
};

export const getRoute = async (userLocation, hospitalLocation) => {
  const response = await api.post("/route", {
    user: userLocation,
    hospital: hospitalLocation,
  });
  return response.data;
};

const handleApiError = (error) => {
  const fallback = "An unexpected error occurred. Please try again.";
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.detail || error.response?.data?.message || fallback
    );
  }
  return fallback;
};

export default api;
