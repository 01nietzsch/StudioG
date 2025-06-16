import React, { useState } from "react";

function PilarsOfStabilitySection() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = {
    name: "Studio G v1.0",
    price: "£75.00",
    images: [
      {
        src: "/assets/imgs/Final Assembly Exploded 2.png",
        alt: "Exploded view",
      },
      { src: "/assets/imgs/Final Assembly 2.png", alt: "Assembled view" },
    ],
    features: [
      {
        title: "Effortless, Eco-Friendly Slow Cooking",
        desc: "Elevate your meals with our 4.7 L Digital Slow Cooker—designed for perfect results, every time.",
      },
      {
        title: "Even, Gentle Heat",
        desc: "Premium ceramic pot locks in moisture and flavor without hotspots.",
      },
      {
        title: "Fast, Consistent Performance",
        desc: "High-efficiency mica heating ring and recycled-aluminium inner vessel heat up quickly and cook evenly.",
      },
      {
        title: "Smart & Simple Controls",
        desc: "Programmable timer (up to 20 hrs), three heat settings plus “Keep Warm,” and a one-hand hinged lid for easy serving.",
      },
      {
        title: "Sustainable Design",
        desc: "Vacuum-insulated stainless steel keeps counters cool, reduces energy use, and is built for a lifetime of meals.",
      },
    ],
  };

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? product.images.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIndex((i) => (i === product.images.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full text-white py-20" id="pilars-of-stability">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* NAME & PRICE */}
          <div>
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <p className="mt-2 text-3xl font-extrabold text-center lg:text-left">
              {product.price}
            </p>
          </div>

          {/* CAROUSEL */}
          <div className="relative flex justify-center items-center">
            {/* <button
              onClick={prevImage}
              className="absolute left-0 text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              aria-label="Previous image"
            >
              ←
            </button> */}

            <img
              src={product.images[currentIndex].src}
              alt={product.images[currentIndex].alt}
              className="w-full max-w-md rounded-lg cursor-pointer hover:scale-105 transform transition"
              onClick={() => setZoomedImage(product.images[currentIndex])}
            />

            <button
              onClick={nextImage}
              className="absolute right-0 text-3xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* SUMMARY & MORE INFO */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              {product.features.slice(0, 3).map((f, i) => (
                <li key={i}>{f.title}</li>
              ))}
            </ul>

            <button
              onClick={() => setShowMore(!showMore)}
              className="px-4 py-2 bg-white text-gray-800 font-medium rounded hover:bg-gray-100"
            >
              {showMore ? "Hide details" : "More info"}
            </button>

            {showMore && (
              <div className="mt-4 space-y-4">
                {product.features.map((f, i) => (
                  <div key={i}>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-gray-200">{f.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ZOOM OVERLAY */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            className="max-w-[90%] max-h-[80vh] object-contain rounded"
          />
        </div>
      )}
    </section>
  );
}

export default PilarsOfStabilitySection;
