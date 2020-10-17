import React from 'react';
import WeatherCard from './components/WeatherCard/component'
import './App.css';

function App() {
  return (
    <div>
      < WeatherCard temp="-5" condition="Hail" />
      < WeatherCard temp="20" condition="Clouds" />
      < WeatherCard temp="40" />
    </div>
  );
}

export default App;
