function SeedCard({ seed, onViewDetails }) {
  return (
    <article className="seed-card">
      <div className="seed-card-top">
        <span className="seed-icon">{seed.icon}</span>

        <span className="seed-category">
          {seed.category}
        </span>
      </div>

      <h3>{seed.name}</h3>

      <p className="seed-hindi">{seed.hindi}</p>

      <p className="seed-description">
        {seed.description}
      </p>

      <div className="seed-info">
        <div>
          <span className="info-label">Growing season</span>
          <strong>{seed.season}</strong>
        </div>

        <div>
          <span className="info-label">Water needs</span>
          <strong>{seed.water}</strong>
        </div>
      </div>

      <button
        className="seed-details-button"
        onClick={() => onViewDetails(seed)}
      >
        View Details →
      </button>
    </article>
  );
}

export default SeedCard;