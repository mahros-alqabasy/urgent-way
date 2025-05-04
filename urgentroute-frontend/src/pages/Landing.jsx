import { useNavigate } from "react-router-dom";
import {
  MapPinIcon,
  BuildingOffice2Icon,
  ArrowTrendingUpIcon,
  LockClosedIcon,
  PhoneIcon,
  WifiIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-sans bg-white">
      <header className="flex justify-between items-center px-6 py-4 shadow-sm">
        <div className="text-lg font-bold text-healing-700 flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/12150/12150456.png"
            alt="UrgentRoute Logo"
            className="w-6 h-6"
            style={{ width: "2rem", height: "2rem" }}
          />
          UrgentRoute
        </div>
        <a
          href="tel:911"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"
        >
          <PhoneIcon className="w-4 h-4" />
          Emergency Call
        </a>
      </header>

      {/* Hero Section */}
      <section className="bg-healing-100 text-center px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-healing-700 mb-2">
          Find the Nearest Hospital Instantly
        </h1>
        <p className="text-healing-600 mb-6">
          Get directions to emergency care with one tap. No registration
          required.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="bg-healing-500 hover:bg-healing-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Find Nearest Hospital
        </button>
      </section>

      {/* How it Works */}
      <section className="text-center px-4 py-14">
        <h2 className="text-xl font-semibold text-healing-700 mb-6">
          How UrgentRoute Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <MapPinIcon className="w-10 h-10 mb-2 text-healing-600" />
            <p className="font-medium">Share Location</p>
            <p className="text-sm text-healing-500">
              Allow location access so we can find hospitals near you
            </p>
          </div>
          <div className="flex flex-col items-center">
            <BuildingOffice2Icon className="w-10 h-10 mb-2 text-healing-600" />
            <p className="font-medium">Find Hospital</p>
            <p className="text-sm text-healing-500">
              We instantly locate the nearest emergency care facility
            </p>
          </div>
          <div className="flex flex-col items-center">
            <PlusCircleIcon className="w-10 h-10 mb-2 text-healing-600" />
            <p className="font-medium">Get Directions</p>
            <p className="text-sm text-healing-500">
              Follow the fastest route to emergency care
            </p>
          </div>
        </div>
      </section>

      {/* Why Use UrgentRoute */}
      <section className="bg-healing-50 px-4 py-16 text-healing-700 text-center">
        <h2 className="text-lg font-semibold mb-10">Why Use UrgentRoute</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded p-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <ArrowTrendingUpIcon className="w-5 h-5 text-healing-600" />
              <p className="font-medium">Fast & Accurate</p>
            </div>
            <p className="text-sm text-healing-600">
              Real-time routing with traffic data to get you there quickly
            </p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <LockClosedIcon className="w-5 h-5 text-healing-600" />
              <p className="font-medium">Privacy First</p>
            </div>
            <p className="text-sm text-healing-600">
              We don’t store your location data or personal information
            </p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <HeartIcon className="w-5 h-5 text-healing-600" />
              <p className="font-medium">Emergency Ready</p>
            </div>
            <p className="text-sm text-healing-600">
              Designed for high-stress situations with minimal interaction
              needed
            </p>
          </div>
          <div className="bg-white shadow rounded p-6 text-left">
            <div className="flex items-center gap-3 mb-2">
              <WifiIcon className="w-5 h-5 text-healing-600" />
              <p className="font-medium">Works Offline</p>
            </div>
            <p className="text-sm text-healing-600">
              Basic functionality even with limited connectivity
            </p>
          </div>
        </div>
      </section>

      {/* Call to Bookmark */}
      <section className="bg-healing-600 text-white text-center px-4 py-10">
        <h2 className="text-lg font-semibold mb-2">
          Ready for emergencies before they happen
        </h2>
        <p className="mb-4 text-sm">
          Bookmark UrgentRoute now so it’s always one tap away when you need it
          most.
        </p>
        <button className="bg-white text-healing-700 px-4 py-2 rounded font-medium shadow-sm">
          Add to Bookmarks
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-healing-700 text-white text-sm px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-2 sm:mb-0 font-semibold">UrgentRoute</div>
        <div>
          © {new Date().getFullYear()} Galala Team. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
