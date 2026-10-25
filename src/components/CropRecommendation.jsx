
import { useState } from "react";
import seeds from "../seeds";

function CropRecommendation() {
  const [season, setSeason] = useState("All");
  const [soil, setSoil] = useState("All");
  const [water, setWater] = useState("All");
  const [hasSearched, setHasSearched] = useState(false);

  const recommendations = seeds.filter((seed) => {
    const matchesSeason =
      season === "All" || seed.season === season;

    const matchesSoil =
      soil === "All" ||
      seed.soil?.toLowerCase() === soil.toLowerCase();

    const matchesWater =
      water === "All" ||
      seed.water?.toLowerCase() === water.toLowerCase();

    return matchesSeason && matchesSoil && matchesWater;
  });

  return (
    <section className="recommendation-section" id="recommend">
      <div className="section-heading">
        <p className="section-tag">SMART FARMING</p>
        <h2>Find the Right Seed</h2>
        <p>
          Choose your farming conditions to find matching seeds
          from our catalog.
        </p>
      </div>

      <div className="recommendation-form">
        <label>
          Growing Season
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option value="All">Any Season</option>
            <option value="Kharif">Kharif</option>
            <option value="Rabi">Rabi</option>
            <option value="Zaid">Zaid</option>
          </select>
        </label>

        <label>
          Soil Type
          <select
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
          >
            <option value="All">Any Soil</option>
            <option value="Loamy">Loamy</option>
            <option value="Clayey">Clayey</option>
            <option value="Sandy">Sandy</option>
            <option value="Black">Black Soil</option>
            <option value="Red">Red Soil</option>
        </select>
        </label>

        <label>
          Water Availability
          <select
            value={water}
            onChange={(e) => setWater(e.target.value)}
          >
            <option value="All">Any Water Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <button
          type="button"
          onClick={() => setHasSearched(true)}
        >
          Get Recommendations
        </button>
      </div>

      {hasSearched && (
        <div className="recommendation-results">
          <h3>Recommended Seeds</h3>

          {recommendations.length > 0 ? (
            <div className="seed-grid">
              {recommendations.map((seed) => (
                <article className="seed-card" key={seed.name}>
                  <div className="seed-icon">{seed.icon}</div>
                  <h3>{seed.name}</h3>
                  <p>{seed.hindiName}</p>
                  <p>{seed.description}</p>
                  <p>
                    <strong>Season:</strong> {seed.season}
                  </p>
                  <p>
                    <strong>Soil:</strong> {seed.soil}
                  </p>
                  <p>
                    <strong>Water:</strong> {seed.water}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p>
              No exact matches found. Try changing one or more
              selections.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default CropRecommendation;
