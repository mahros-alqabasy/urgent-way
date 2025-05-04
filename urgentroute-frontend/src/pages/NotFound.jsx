import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-healing-50 text-center px-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="Not found"
        className="w-32 h-32 mb-6 opacity-80"
      />
      <h2 className="text-3xl font-bold text-healing-700 mb-2">No Hospitals Found Nearby</h2>
      <p className="text-healing-600 mb-4">
        We couldn't find a hospital near your location. You can try again or use manual options.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => window.location.reload()}
          className="bg-healing-500 text-white px-5 py-2 rounded hover:bg-healing-600 transition"
        >
          Try Again
        </button>
        <button
          onClick={() => navigate("/")}
          className="border border-healing-400 text-healing-600 px-5 py-2 rounded hover:bg-healing-100"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
