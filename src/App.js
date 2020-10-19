import React, { useState } from 'react';
import WeatherCard from './Components/WeatherCard'
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [weatherCond, setWeatherCond] = useState("");
  const [weatherTemp, setWeatherTemp] = useState("");

  const q = "Lahore"
  const data = async () => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=34b5f955b8fa96d8a786a271305fea87`

    )
    const resJOSN = await apiRes.json()
    return resJOSN;
  }
  const handleSearch = e => {
    e.PreventDefault();
    data().then(res => {
      console.log("feels_like " + res.main.feels_like)
      console.log("the temp is " + res.main.temp)
    })
  }

  return (
    <div>
      < WeatherCard temp="3" imagecondition="Rain" city="Karachi" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
      < WeatherCard temp="20" imagecondition="Dust" city="Lahore" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
      < WeatherCard temp="40" imagecondition="Tornado" city="Sibhi" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
    </div>
  );
}

export default App;
