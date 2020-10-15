import React from 'react';
import styled from '@emotion/styled';
import Location from './Location'
import Icon from './Icon';
const WeatherCard = (props) => {
    let temp = 15;
    let heighColor = 0;
    let lowColor = 0;
    let bg = null;
    if (temp > 12) { //this is for hot weather
        heighColor = (1 - ((temp - 12) / 28)) * 255;
        lowColor = heighColor - 200;
        bg = `linear-gradient(to top,
        rgb(255,${heighColor},0),
        rgb(255,${Math.abs(lowColor)},0)
        )`;
    } else if (temp <= 12) { // this is for Clod weather
        heighColor = (1 - (temp + 20) / 32) * 255;
        lowColor = heighColor - 200;
        bg = `linear-gradient(to top,
        rgb(0,${heighColor},255),
        rgb(0,${Math.abs(lowColor)},255)
        )`;
    }
    const Card = styled.div`
                    margin:0 auto;
                background: ${bg};
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

            <Location />
            <Icon />
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