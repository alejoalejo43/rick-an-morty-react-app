import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import LocationFilter from './components/LocationFilter';
import Locationinfo from './components/Locationinfo';
import ResidentList from './components/ResidentList';
import getRandomNumber from './utils/getRandomNumber';
import fondo from './images/fondo.jpg';

function App() {
  const [location, setLocation] = useState();
  const [locationName, setlocationName] = useState('');
  const [showError, setshowError] = useState(false);

  // getRandomNumber();

  const getDataDimension = (idDimension) => {
    if (idDimension) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`;
      axios
        .get(URL)
        .then((res) => setLocation(res.data))
        .catch((err) => {
          setshowError(true);
          setTimeout(() => {
            setshowError(false);
          }, 1500);
          console.log(err);
        });
    } else {
      alert('Set a value');
    }
  };

  useEffect(() => {
    const randomDimension = getRandomNumber();
    getDataDimension(randomDimension);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dimensionSearch = event.target.searchValue.value;
    getDataDimension(dimensionSearch);
  };
  const handleChangeInput = (event) => {
    setlocationName(event.target.value);
  };
  const getNewLocation = (URL, name) => {
    setlocationName(name);
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <img className="imagen" src={fondo}></img>
      <form className="formSearch" onSubmit={handleSubmit}>
        <div className="searchBar">
          <input
            className="inputSearch"
            id="searchValue"
            value={locationName}
            type="text"
            onChange={handleChangeInput}
            placeholder="Search your dimention"
          />
          {/* <div className="filterFrame">
            <LocationFilter
              locationName={locationName}
              getNewLocation={getNewLocation}
            />
          </div> */}
        </div>
        <button type="submit">Search</button>
        {showError ? <ErrorMessage /> : ''}
      </form>
      <br />

      <Locationinfo location={location} />
      <br />

      <ResidentList location={location} />
    </div>
  );
}

export default App;
