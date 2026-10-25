import "./App.css";

function App() {
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
    </div>
  );
}

export default App;