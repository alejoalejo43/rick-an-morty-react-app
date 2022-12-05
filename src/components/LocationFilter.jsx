import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const LocationFilter = ({ locationName, getNewLocation }) => {
  const [locationsOptions, setLocationsOptions] = useState();
  useEffect(() => {
    if (!locationName) {
      setLocationsOptions();
      return;
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`;
    axios
      .get(URL)
      .then((res) => setLocationsOptions(res.data.results))
      .catch((err) => console.log(err));
  }, [locationName]);

  return (
    <ul>
      {locationsOptions?.map((locationOption) => (
        <li
          onClick={() =>
            getNewLocation(locationOption.url, locationOption.name)
          }
          key={locationOption.url}
        >
          {locationOption.name}
        </li>
      ))}
    </ul>
  );
};

export default LocationFilter;
