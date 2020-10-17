import React from 'react';
import styled from '@emotion/styled';
import Location from './Location'
import Icon from './Icon';
import WeatherTemprature from './WeatherTemp'
import Designby from './Designby';
const WeatherCard = ({ temp, imagecondition, city, country, creatdby, email }) => {

    const red = 100;
    const Card = styled.div`
                    margin:0 auto;
                background: linear-gradient(to bottom,rgba(${red},200,200),lightblue);
                width: 200px;
                height: 280px;
                display: flex;
                flex-direction: column;
                justify-content:space-around;
                align-items: center;
                border-radius: 15px;
                color: white;`

    return (
        <Card>

            <Location city={city} country={country} />
            <Icon imagecondition={imagecondition} />
            <WeatherTemprature temp={temp} imagecondition={imagecondition} />
            <Designby creatdby={creatdby} email={email} />
        </Card>

    );
}

export default WeatherCard;