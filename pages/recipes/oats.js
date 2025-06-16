// pages/recipes/overnight-oats.js
import React from "react";

export default function OvernightOatsRecipe() {
  return (
    <div className="prose mx-auto max-w-3xl mt-40 text-white space-y-16">
      <section className="bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">
          🍎 Overnight Apple Cinnamon Oats
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-6">
          <div className="flex-1">
            <p>
              <strong>Prep Time:</strong> 10 min
            </p>
            <p>
              <strong>Chill Time:</strong> ≥8 hrs
            </p>
            <p>
              <strong>Servings:</strong> 4
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>2 cups rolled oats</li>
              <li>2 cups almond (or choice) milk</li>
              <li>1 large apple, diced</li>
              <li>1 tsp cinnamon</li>
              <li>2 tbsp maple syrup</li>
              <li>1 tsp vanilla extract</li>
              <li>Pinch of salt</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Mix everything in a bowl until oats are coated.</li>
              <li>Divide into jars, seal, and refrigerate overnight.</li>
              <li>Stir & top with extra apple or nuts before serving.</li>
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Serving & Storage</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Eat cold or warm briefly.</li>
              <li>Store in fridge up to 5 days.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
