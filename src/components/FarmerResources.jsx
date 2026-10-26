
const resources = [
  {
    id: 1,
    icon: "💰",
    title: "PM-KISAN",
    description:
      "Explore the official farmer income-support scheme, registration information, and beneficiary status.",
    category: "Government Scheme",
    url: "https://pmkisan.gov.in/",
    button: "Visit PM-KISAN"
  },
  {
    id: 2,
    icon: "🛡️",
    title: "Crop Insurance",
    description:
      "Find official information about Pradhan Mantri Fasal Bima Yojana and crop insurance services.",
    category: "Crop Protection",
    url: "https://pmfby.gov.in/",
    button: "Explore Insurance"
  },
  {
    id: 3,
    icon: "🪴",
    title: "Soil Health Card",
    description:
      "Learn about soil testing and soil health information to support informed fertilizer decisions.",
    category: "Soil Management",
    url: "https://soilhealth.dac.gov.in/",
    button: "Explore Soil Health"
  },
  {
    id: 4,
    icon: "🔬",
    title: "ICAR",
    description:
      "Explore agricultural research, crop science, and farming knowledge from India's agricultural research system.",
    category: "Research and Learning",
    url: "https://icar.org.in/",
    button: "Visit ICAR"
  },
  {
    id: 5,
    icon: "📋",
    title: "Government Schemes",
    description:
      "Browse government schemes and find official information about eligibility and application processes.",
    category: "Farmer Support",
    url: "https://www.india.gov.in/my-government/schemes",
    button: "Browse Schemes"
  }
];

function FarmerResources() {
  return (
    <section className="farmer-resources" id="farmer-resources">
      <div className="section-heading">
        <p className="section-tag">FARMER SUPPORT</p>
        <h2>Government Schemes & Resources</h2>
        <p>
          Explore official websites for agricultural schemes,
          crop insurance, soil health, and farming research.
        </p>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <article className="resource-card" key={resource.id}>
            <div className="resource-icon" aria-hidden="true">
              {resource.icon}
            </div>

            <span className="resource-category">
              {resource.category}
            </span>

            <h3>{resource.title}</h3>
            <p>{resource.description}</p>

            <a
              className="resource-link"
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.button} ↗
            </a>
          </article>
        ))}
      </div>

      <p className="resource-disclaimer">
        BeejMitra is an educational project and is not a government
        website. Scheme eligibility, benefits, and application
        requirements are determined by the relevant official authority.
        Please verify the latest details on official websites.
      </p>
    </section>
  );
}

export default FarmerResources;
