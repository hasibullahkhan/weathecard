import React from 'react';
import WeatherCard from './Components/WeatherCard'
import './App.css';

function App() {
  const q = "Lahore"

  return (
    <div>
      < WeatherCard temp="3" imagecondition="Rain" city="Karachi" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
      < WeatherCard temp="20" imagecondition="Dust" city="Lahore" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
      < WeatherCard temp="40" imagecondition="Tornado" city="Sibhi" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
    </div>
  );
}

export default App;
