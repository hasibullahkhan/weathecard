import React from 'react';
import styled from '@emotion/styled';
import Location from './Location'
import Icon from './Icon';
import Condition from './Condition'
const WeatherCard = (temp, condition) => {
    // let temp = 15;
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
            <Icon condition={condition} />
            <Condition />
        </Card>

    );
}

export default WeatherCard;