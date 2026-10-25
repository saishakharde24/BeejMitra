import { useState } from "react";
import crops from "../crops";

function CropInformation() {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) => {
    const query = search.toLowerCase();

    return (
      crop.name.toLowerCase().includes(query) ||
      crop.hindiName.includes(search) ||
      crop.season.toLowerCase().includes(query)
    );
  });

  return (
    <section className="crop-information" id="crop-information">
      <div className="section-heading">
        <p className="section-tag">LEARN ABOUT CROPS</p>
        <h2>Crop Information</h2>
        <p>
          Explore growing seasons, soil requirements, water needs,
          and general information about common crops.
        </p>
      </div>

      <div className="crop-search">
        <input
          type="search"
          placeholder="Search crops by name or season..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search crops"
        />
      </div>

      <div className="crop-information-grid">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <article className="crop-information-card" key={crop.id}>
              <div className="crop-information-icon">
                {crop.icon}
              </div>

              <h3>{crop.name}</h3>
              <p className="crop-hindi-name">{crop.hindiName}</p>

              <p>{crop.description}</p>

              <div className="crop-information-details">
                <p>
                  <strong>Season:</strong> {crop.season}
                </p>

                <p>
                  <strong>Soil:</strong> {crop.soil}
                </p>

                <p>
                  <strong>Water:</strong> {crop.water}
                </p>

                <p>
                  <strong>Duration:</strong> {crop.duration}
                </p>
              </div>
            </article>
          ))
        ) : (
          <p className="crop-no-results">
            No crops found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}

export default CropInformation;