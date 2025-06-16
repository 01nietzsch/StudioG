import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import React-Leaflet components to disable SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const steps = [
  {
    key: "collect",
    icon: "🚚",
    title: "Collect",
    desc: "Drop off or mail-back old cookers",
  },
  {
    key: "sort",
    icon: "🏭",
    title: "Sort",
    desc: "Regional hubs salvage parts",
  },
  {
    key: "market",
    icon: "🛒",
    title: "Marketplace",
    desc: "Browse salvaged parts",
  },
  { key: "repair", icon: "🔧", title: "Repair", desc: "Local & DIY fixes" },
  {
    key: "rewards",
    icon: "🎁",
    title: "Rewards",
    desc: "Earn credits & track savings",
  },
];

export default function OttoProtocol() {
  return (
    <div className="text-gray-800 antialiased mt-20">
      {/* Hero Section */}
      <section className="py-16 ">
        <div className="mx-auto max-w-4xl text-center mt-20">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Close the Loop on Slow-Cookers
          </h1>
          <p className="text-white mb-8">
            Our circular protocol ensures your slow-cooker lives longer: you
            collect old units, they’re sorted at regional hubs, parts enter a
            marketplace, local repair keeps devices running, and you earn
            rewards for participating.
          </p>
        </div>
      </section>

      {/* Step-by-Step Grid */}
      <section className="py-12 px-4 ">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {steps.map((step) => (
              <div
                key={step.key}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explanation & Map Section */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            How It Works
          </h2>
          <p className="text-white mb-6 text-center">
            Enter your location to find the closest collection hub or certified
            repair partner. Our interactive map shows all active centers where
            you can drop off old units or pick up parts and repair services.
          </p>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <MapContainer
              center={[51.4998, -0.1757]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* Example Markers */}
              <Marker position={[51.4998, -0.1757]}>
                <Popup>Regional Hub</Popup>
              </Marker>
              <Marker position={[51.5005, -0.174]}>
                <Popup>Repair Partner</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>

      {/* Footer CTAs */}
      <div className="mt-16 text-center px-4">
        <a
          href="mailto:team.studiog.contact@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Become a Retailer
        </a>
      </div>
    </div>
  );
}
