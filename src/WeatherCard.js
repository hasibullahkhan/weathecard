import React from 'react';

const WeatherCard = (props) => {
    return (
        <div className="card">

            <div className="location">
                <h1 className="city">Karachi</h1>
                <h3 className="country">Pak</h3>
            </div>

            <img className="icon" src="./img/Cloudy.png" alt="Weather Icon" />

            {/*  D:\react projects\weathercard\weathecard\public\img */}
            <h1 className="temp">34 °C</h1>
            <h3 className="condition">Clouds</h3>
            <name>
                <h6 className="name">-------------------------------------------------</h6>
                <h6 className="name">Design by:Hasibullah khan</h6>
                <h6 className="name">Email    :hasibpak@gmail.com</h6>
            </name>
        </div>

    );
}

export default WeatherCard;