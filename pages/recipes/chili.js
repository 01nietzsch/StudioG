// pages/recipes/chili.js
import React from "react";

export default function ChiliRecipe() {
  return (
    <div className="prose mx-auto max-w-3xl mt-40 text-white space-y-16">
      <section className="bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">🍖 6-Hour Slow Cooker Chili</h1>
        <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
          <div className="flex-1">
            <p>
              <strong>Total Time:</strong> 6 hours
            </p>
            <p>
              <strong>Servings:</strong> 6
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Meat & Base</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>1 kg ground beef (80/20 blend)</li>
                  <li>1 large onion, diced</li>
                  <li>4 cloves garlic, minced</li>
                  <li>1 green bell pepper, diced</li>
                  <li>2 tbsp chili powder</li>
                  <li>1 tbsp ground cumin</li>
                  <li>1 tsp smoked paprika</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Beans & Liquids</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>400 g kidney beans, drained & rinsed</li>
                  <li>400 g black beans, drained & rinsed</li>
                  <li>800 g crushed tomatoes</li>
                  <li>250 ml beef or veg broth</li>
                  <li>2 tbsp tomato paste</li>
                  <li>1 tbsp Worcestershire sauce</li>
                </ul>
              </div>
            </div>
            <h3 className="font-semibold mt-4">Optional Garnishes</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Shredded cheddar</li>
              <li>Sour cream or Greek yogurt</li>
              <li>Chopped green onions</li>
              <li>Fresh cilantro</li>
              <li>Jalapeño slices</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Sear Beef:</strong> Brown in a skillet; drain fat.
              </li>
              <li>
                <strong>Combine:</strong> Add beef, veg, & spices to slow
                cooker.
              </li>
              <li>
                <strong>Add Liquids:</strong> Beans, tomatoes, broth, paste &
                Worcestershire.
              </li>
              <li>
                <strong>Cook:</strong> Low for 6 hrs, lid closed.
              </li>
              <li>
                <strong>Finish:</strong> Season, ladle, garnish.
              </li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Serving & Storage</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Serve with bread or cornbread.</li>
              <li>Fridge: 4 days; Freeze: 3 months.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
