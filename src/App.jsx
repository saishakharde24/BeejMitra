import "./App.css";

import { useState } from "react";
import "./App.css";
import SeedCard from "./components/SeedCard";
import seeds from "./seeds";
import CropRecommendation from "./components/CropRecommendation";
import CropInformation from "./components/CropInformation";
import FarmerResources from "./components/FarmerResources";

function App() {
    const [selectedSeed, setSelectedSeed] = useState(null);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
const [seasonFilter, setSeasonFilter] = useState("All");

    const filteredSeeds = seeds.filter((seed) => {
  const matchesSearch =
    seed.name.toLowerCase().includes(search.toLowerCase()) ||
    seed.hindiName.includes(search) ||
    seed.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    categoryFilter === "All" || seed.category === categoryFilter;

  const matchesSeason =
    seasonFilter === "All" || seed.season === seasonFilter;

  return matchesSearch && matchesCategory && matchesSeason;
});

  return (
    <div className="app">
      {/* Navigation Bar */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-icon">🌱</span>
          BeejMitra
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <a href="#features" className="nav-button">
          Explore Seeds
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              SMARTER SEED SELECTION
            </span>

            <h1>
              The Right Seed.
              <br />
              A Better <span>Harvest.</span>
            </h1>

            <p>
              Discover seed varieties, explore crop information,
              and learn about growing requirements with BeejMitra.
            </p>

            <div className="hero-buttons">
              <a href="#features" className="primary-button">
                Explore Features →
              </a>

              <a href="#about" className="secondary-button">
                Learn More
              </a>
            </div>

            <div className="hero-note">
              <span>✓</span>
              Explore seed information in one place
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <div className="plant-emoji">🌾</div>
            </div>

            <div className="floating-card card-top">
              <span>🌱</span>
              <div>
                <strong>Explore Varieties</strong>
                <small>Find seeds for your needs</small>
              </div>
            </div>

            <div className="floating-card card-bottom">
              <span>🌿</span>
              <div>
                <strong>Grow with Knowledge</strong>
                <small>Learn about crop requirements</small>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features section-container" id="features">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>

            <h2>Everything Starts with a Seed</h2>

            <p>
              Explore the tools designed to help you learn about
              seeds and make informed comparisons.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🔎</div>

              <h3>Seed Discovery</h3>

              <p>
                Explore seed varieties and find information
                about different crops.
              </p>

              <a href="#catalog">Explore more →</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⚖️</div>

              <h3>Compare Seeds</h3>

              <p>
                Compare growing seasons, soil preferences,
                and water requirements.
              </p>

              <a href="#catalog">Discover more →</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon">📚</div>

              <h3>Crop Information</h3>

              <p>
                Learn about crops and the conditions commonly
                associated with their cultivation.
              </p>

              <a href="#about">Learn more →</a>
            </article>
          </div>
        </section>

        {/* Seed Catalog Section */}
<section className="seed-catalog section-container" id="catalog">
  <div className="section-heading">
    <span className="eyebrow">EXPLORE OUR COLLECTION</span>

    <h2>Discover Seed Varieties</h2>

    <p>
      Explore different crops and learn about their
      characteristics.
    </p>
  </div>

  <div className="seed-search">
  <label htmlFor="seed-search-input">
    Search for a seed
  </label>

  <input
    id="seed-search-input"
    type="search"
    placeholder="Try Wheat, Rice, Moong..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
  />
  <div className="filter-controls">
  <label>
    Category:
    <select
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
    >
      <option value="All">All Categories</option>
      <option value="Cereals">Cereals</option>
      <option value="Pulses">Pulses</option>
      <option value="Millets">Millets</option>
    </select>
  </label>

  <label>
    Season:
    <select
      value={seasonFilter}
      onChange={(e) => setSeasonFilter(e.target.value)}
    >
      <option value="All">All Seasons</option>
      <option value="Kharif">Kharif</option>
      <option value="Rabi">Rabi</option>
      <option value="Zaid">Zaid</option>
    </select>
  </label>

  <button
    type="button"
    onClick={() => {
      setSearch("");
      setCategoryFilter("All");
      setSeasonFilter("All");
    }}
  >
    Reset Filters
  </button>
</div>


  <p className="search-count" aria-live="polite">
    {filteredSeeds.length} seed
    {filteredSeeds.length !== 1 ? "s" : ""} found
  </p>
</div>

  <div className="seed-grid">
  {filteredSeeds.length > 0 ? (
    filteredSeeds.map((seed) => (
      <SeedCard
        key={seed.id}
        seed={seed}
        onViewDetails={setSelectedSeed}
      />
    ))
  ) : (
    <div className="no-results">
      <span>🔎</span>
      <h3>No seeds found</h3>
      <p>Try another seed name or category.</p>
    </div>
  )}
</div>

</section>

<CropRecommendation />


<CropInformation />


<FarmerResources />

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <span className="eyebrow">ABOUT BEEJMITRA</span>

            <h2>
              Knowledge for Every
              <span> Growing Journey.</span>
            </h2>

            <p>
              BeejMitra is an agriculture information project
              designed to make seed information easier to explore.
              It brings crop details and seed variety comparisons
              together in one accessible place.
            </p>

            <p>
              Our goal is to make agricultural information easier
              to understand through a simple digital experience.
            </p>

            <a href="#features" className="primary-button">
              Discover BeejMitra →
            </a>
          </div>

          <div className="about-visual" aria-hidden="true">
            <div className="about-plant">🌱</div>

            <div className="about-badge">
              <strong>Learn.</strong>
              <strong>Compare.</strong>
              <strong>Grow.</strong>
            </div>
          </div>
        </section>


      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          <span className="logo-icon">🌱</span>
          BeejMitra
        </a>

        <p>Helping people explore seed and crop information.</p>

        <p className="copyright">
          © {new Date().getFullYear()} BeejMitra. All rights reserved.
        </p>
      </footer>
            {selectedSeed && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedSeed(null)}
        >
          <section
            className="seed-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="seed-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedSeed(null)}
              aria-label="Close seed details"
            >
              ×
            </button>

            <div className="modal-seed-icon">
              {selectedSeed.icon}
            </div>

            <span className="seed-category">
              {selectedSeed.category}
            </span>

            <h2 id="seed-modal-title">
              {selectedSeed.name}
            </h2>

            <p className="seed-hindi">
              {selectedSeed.hindi}
            </p>

            <p>{selectedSeed.description}</p>

            <div className="modal-info">
              <p>
                <strong>Growing season:</strong>{" "}
                {selectedSeed.season}
              </p>

              <p>
                <strong>Water needs:</strong>{" "}
                {selectedSeed.water}
              </p>

              <p>
                <strong>Soil information:</strong>{" "}
                {selectedSeed.soil}
              </p>
            </div>

            <p className="data-note">
              General educational information only.
              Confirm local cultivation requirements with
              a qualified agricultural adviser.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;