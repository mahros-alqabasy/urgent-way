import {
  MapPinIcon,
  BuildingOffice2Icon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Allow Location",
    desc: "We use your device’s GPS to locate you accurately.",
    icon: <MapPinIcon className="w-8 h-8 text-healing-700" />,
  },
  {
    title: "Find Nearby Hospitals",
    desc: "We instantly search for the closest hospital to your position.",
    icon: <BuildingOffice2Icon className="w-8 h-8 text-healing-700" />,
  },
  {
    title: "Get Your Route",
    desc: "We provide the safest driving route in real time.",
    icon: <MapIcon className="w-8 h-8 text-healing-700" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-healing-700 mb-6">How It Works</h1>
      <p className="text-healing-600 max-w-2xl mx-auto mb-12">
        UrgentRoute helps you find the nearest hospital and reach it safely in
        just a few steps.
      </p>

      <div className="relative flex flex-col md:flex-row md:justify-between items-center max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-12 md:mb-0"
          >
            <div className="bg-healing-100 rounded-full p-4 mb-3">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-healing-700 mb-1">
              {index + 1}. {step.title}
            </h3>
            <p className="text-sm text-healing-600 max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => window.history.back()}
        className="mt-12 text-healing-600 hover:text-healing-700 text-sm underline"
      >
        ← Back to landing page
      </button>
    </div>
  );
};

export default HowItWorks;
