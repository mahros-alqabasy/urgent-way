import { PhoneIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white z-50 relative">
      <div className="text-lg font-bold text-healing-700 flex items-center gap-2">
        <span className="text-2xl">🩺</span> UrgentRoute
      </div>
      <a
        href="tel:911"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm flex items-center gap-2"
      >
        <PhoneIcon className="w-4 h-4" />
        Emergency Call
      </a>
    </header>
  );
};

export default Navbar;
