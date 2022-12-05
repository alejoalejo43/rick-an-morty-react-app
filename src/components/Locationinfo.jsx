import React from 'react';

const Locationinfo = ({ location }) => {
  return (
    <article>
      <h2>{location?.name}</h2>
      <ul>
        <li>
          <span>Type:{location?.type}</span>
        </li>
        <li>
          <span>Diomension: {location?.dimension}</span>
        </li>
        <li>
          <span>Population: {location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default Locationinfo;
