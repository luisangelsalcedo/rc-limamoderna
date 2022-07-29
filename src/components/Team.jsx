import React from "react";
import data from "../data";

const Team = () => {
  const { building, items } = data.team;
  return (
    <div className="team">
      <div className="team-portada">
        <img src={`img/${building}`} alt="Valente2 fachada" />
        <p>
          Las áreas comunes han sido diseñadas con los mejores acabados, por un
          equipo de élite, compuesto por interioristas, expertos en iluminación
          y tecnología.
        </p>
      </div>
      <div className="team-list">
        {items.map(({ src, fullname, label, bio }) => (
          <div className="team-list__item" key={src}>
            <div className="team-list__image">
              <img src={`img/${src}`} alt={`${fullname}`} />
            </div>
            <div className="team-list__fullname">{fullname}</div>
            <div className="team-list__label">{label}</div>
            <div className="team-list__bio">{bio}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
