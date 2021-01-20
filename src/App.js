import React from 'react';
import './App.css';
import Input from './components/Input';
import { IoMdSearch } from 'react-icons/all';

function App() {
  const [city, setCity] = React.useState('');
  const [temperature, setTemperature] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [country, setCountry] = React.useState(null);
  const [weather, setWeather] = React.useState(null);
  const [icon, setIcon] = React.useState(null);
  const [error, setError] = React.useState(null);

  const APIkey = process.env.REACT_APP_KEY;

  function searchCity() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => {
        const { main, name, sys, weather } = data;
        setTemperature(main.temp);
        setName(name);
        setCountry(sys.country);
        setWeather(weather[0].description);
        setIcon(
          `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`,
        );
        setError(null);
      })
      .catch(() => setError('City not found 😓'));
  }

  return (
    <div>
      <h1 className="title">Weather Application</h1>
      <div className="search">
        <Input
          id="search"
          value={city}
          setValue={setCity}
          searchCity={searchCity}
          className="input"
          placeholder="Search for city"
        />
        <IoMdSearch size={35} onClick={searchCity} className="icon" />
      </div>
      {temperature && !error ? (
        <div className="weather">
          <p className="name">
            {name} <sup className="country">{country}</sup>
          </p>
          <p className="temperature">
            {temperature} <sup className="celsius">ºC</sup>
          </p>
          <img className="iconClimate" src={icon} alt="Weather Icon" />
          <p className="climate">{weather}</p>
        </div>
      ) : (
        <p className="error">{error}</p>
      )}
    </div>
  );
}

export default App;
