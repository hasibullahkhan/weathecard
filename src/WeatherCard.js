import React from 'react';
import './App.css';
const WeatherCard = (props) => {
    return (
        <div className="card">
            <h1 className="city">Karachi</h1>
            <h3 className="country">Pak</h3>
            <img className="icon" src="" alt="Weather Icon" />
            <h1 className="temp">34 °C</h1>
            <h3 className="condition">Clouds</h3>

        </div>

    );
}

export default WeatherCard;