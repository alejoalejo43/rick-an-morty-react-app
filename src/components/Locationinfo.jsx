import React from 'react';

const Locationinfo = ({ location }) => {
  return (
    <article className="locationFrame">
      <h2>{location?.name}</h2>
      <ul className="infoDimension">
        <li>
          <span className="dimensionTitle">Type: </span>
          <span className="dimensionContent">{location?.type}</span>
        </li>
        <li>
          <span className="dimensionTitle">Dimension: </span>{' '}
          <span className="dimensionContent">{location?.dimension}</span>
        </li>
        <li>
          <span className="dimensionTitle">Population: </span>{' '}
          <span className="dimensionContent">{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
