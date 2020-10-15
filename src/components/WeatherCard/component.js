import React from 'react';
import styled from `@emotion/styled`;

const WeatherCard = (props) => {

    const red = 200;
    const Card = styled.div`
                    margin:0 auto;
                background: linear-gradient(to bottom,rgba(${read},200,200),lightblue);
                width: 200px;
                height: 280px;
                display: flex;
                flex-direction: column;
                justify-content:space-around;
                align-items: center;
                border-radius: 15px;
                color: white;`

    return (
        <Card className="card">

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
        </Card>

    );
}

export default WeatherCard;