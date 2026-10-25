import "./App.css";

import { useState } from "react";
import "./App.css";
import SeedCard from "./components/SeedCard";
import seeds from "./seeds";

function App() {
    const [selectedSeed, setSelectedSeed] = useState(null);
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

  <div className="seed-grid">
    {seeds.map((seed) => (
      <SeedCard
        key={seed.id}
        seed={seed}
        onViewDetails={setSelectedSeed}
      />
    ))}
  </div>
</section>

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