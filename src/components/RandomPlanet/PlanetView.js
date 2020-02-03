import React from "react";

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <div className="planet-item">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
      </div>
      <div className="planet-item">
        <h4>{name}</h4>
        <ul className="planet-review">
          <li className="planet-review-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="planet-review-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="planet-review-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PlanetView;
