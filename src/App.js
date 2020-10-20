import React, { useState } from 'react';
import WeatherCard from './Components/WeatherCard'
import './App.css';

function App() {
  const [city, setCity] = useState("Sydeny, au");
  const [country, setCountry] = useState("");
  const [weathercond, setWeatherCond] = useState("");
  const [weathertemp, setWeatherTemp] = useState("");

  const q = { city };
  const data = async () => {
    const apiRes = await fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=34b5f955b8fa96d8a786a271305fea87`
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=34b5f955b8fa96d8a786a271305fea87`

    )
    const resJOSN = await apiRes.json()
    return resJOSN;
  }

  data().then(res => {
    setWeatherTemp(res.main.temp);
    setWeatherCond(res.weather[0].main);
    setCity(res.name)
    setCountry(res.sys.country)
  })
  const handleSearch = (e) => {
    e.preventDefault();
    data().then(res => {
      setWeatherTemp(res.main.temp);
      setWeatherCond(res.weather[0].main);
      setCity(res.name)
      setCountry(res.sys.country)
    })
  }

  return (
    <div>
      < WeatherCard
        temp={weathertemp}
        imagecondition={weathercond}
        city={city} country={country}
        creatdby="Hasibullah khan"
        email="hasibpak@gmail.com" />

      <form>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)} />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>

    </div>
  );
}

export default App;
