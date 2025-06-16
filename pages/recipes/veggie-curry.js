// pages/recipes/chili.js
import React from "react";

export default function ChiliRecipe() {
  return (
    <div className="prose mx-auto max-w-3xl mt-40 text-white space-y-16">
      {/* Slow Cooker Chili */}
      <section className="bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Vegetable Curry</h1>
        {/* …contenu de la recette de chili… */}
      </section>

      {/* Vegan Vegetable Coconut Curry */}
      <section className="bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          🌱 Vegan Vegetable Coconut Curry
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
          <div className="flex-1">
            <p>
              <strong>Total Time:</strong> 4 hours (hands-off)
            </p>
            <p>
              <strong>Servings:</strong> 4
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold">Base Ingredients</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>1 medium onion, finely chopped</li>
                  <li>3 cloves garlic, minced</li>
                  <li>1 tbsp fresh ginger, grated</li>
                  <li>
                    2 tbsp curry powder (or 1 tbsp garam masala + 1 tbsp
                    turmeric)
                  </li>
                  <li>1 tsp ground cumin</li>
                  <li>½ tsp chili flakes (optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Veggies & Liquids</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>2 cups sweet potato, diced</li>
                  <li>1 cup carrots, sliced</li>
                  <li>1 cup cauliflower florets</li>
                  <li>1 cup green beans, chopped</li>
                  <li>1 red bell pepper, diced</li>
                  <li>1 can (400 ml) full-fat coconut milk</li>
                  <li>1½ cups vegetable broth</li>
                  <li>1 tbsp soy sauce or tamari</li>
                  <li>Juice of 1 lime</li>
                </ul>
              </div>
            </div>

            <h3 className="font-semibold mt-4">Other</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Salt and pepper to taste</li>
              <li>1 tbsp coconut or olive oil</li>
              <li>Fresh cilantro or basil, for garnish</li>
              <li>Cooked rice, to serve</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Sauté Base (Optional):</strong> On sauté mode, heat oil,
                cook onion, garlic & ginger (3–5 min). Toast spices 1–2 min.
              </li>
              <li>
                <strong>Load Vegetables:</strong> Add veggies, stir to coat.
              </li>
              <li>
                <strong>Add Liquids:</strong> Pour coconut milk, broth & soy
                sauce; stir gently.
              </li>
              <li>
                <strong>Slow Cook:</strong> Low for 4 hrs. Stir once halfway if
                possible.
              </li>
              <li>
                <strong>Finish:</strong> Stir in greens, wilt 5 min. Season with
                salt, pepper & lime juice.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Serving & Storage</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Serve over jasmine or basmati rice.</li>
              <li>Garnish with cilantro and toasted cashews.</li>
              <li>Refrigerate up to 5 days; freeze up to 3 months.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
