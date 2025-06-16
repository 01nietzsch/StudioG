import React from "react";
import Image from "next/image";
import Link from "next/link";

function TrilemmaSection() {
  const recipes = [
    {
      href: "/recipes/chili",
      imgSrc:
        "/assets/imgs/233613-best-damn-chili-DDMFS-4x3-e493a5d6071c47cc836c95bb6ced7883.jpg",
      imgAlt: "Slow Cooker Chili",
      title: "Slow Cooker Chili",
      meta: "5 ingredients · 6 hours · Beginner",
    },
    {
      href: "/recipes/veggie-curry",
      imgSrc:
        "/assets/imgs/courgette-chickpea-&-coconut-curry-1800x1040-efc1ceb6f67e8b7da66bf318f113420e.jpg",
      imgAlt: "Vegetable Coconut Curry",
      title: "Vegetable Coconut Curry",
      meta: "10 ingredients · 4 hours · Vegan",
    },
    {
      href: "/recipes/oats",
      imgSrc: "/assets/imgs/images.jpg",
      imgAlt: "Overnight Apple-Cinnamon Oats",
      title: "Overnight Apple-Cinnamon Oats",
      meta: "4 ingredients · 8 hours · Prep & forget",
    },
  ];

  return (
    <section className="w-full text-white py-8 sm:py-12 md:py-28">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <h3 className="text-2xl sm:text-3xl font-medium mb-4">Recipes Hub</h3>
        <p className="text-base sm:text-lg text-gray-300">
          Welcome to the heart of our slow cooker community. Whether you're
          batch-cooking or experimenting with stews, browse and share dishes
          designed for our 3.5L cooker.
        </p>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {recipes.map((r, idx) => (
          <Link
            key={idx}
            href={r.href}
            className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={r.imgSrc}
                alt={r.imgAlt}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base sm:text-lg font-medium text-gray-800">
                {r.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {r.meta}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Community CTA */}
      <div className="mt-16 text-center px-4">
        <p className="text-lg sm:text-xl text-gray-200 mb-4">
          Have your own slow-cooker masterpiece? Share your recipe for a chance
          to be featured on our site!
        </p>
        <a
          href="mailto:team.studiog.contact@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Share Your Recipe
        </a>
      </div>
    </section>
  );
}

export default TrilemmaSection;
