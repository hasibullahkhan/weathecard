import React from 'react';
import WeatherCard from './Components/WeatherCard'
import './App.css';

function App() {
  return (
    <div>
      < WeatherCard temp="13" imagecondition="Hail" city="Karachi" country="Pak" creatdby="Hasibullah khan" email="hasibpak@gmail.com" />
    </div>
  );
}

export default App;
