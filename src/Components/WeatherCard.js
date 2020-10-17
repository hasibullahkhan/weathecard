import React from 'react';
import styled from '@emotion/styled';
import Location from './Location'
import Icon from './Icon';
import WeatherTemprature from './WeatherTemp'
const WeatherCard = (props) => {

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

            <Location city="Karachi" country="Pak" />
            <Icon imagecondition="Fog" />
            <WeatherTemprature temp="15" imagecondition="Fog" />
            <name>
                <h6 className="name">-------------------------------------------------</h6>
                <h6 className="name">Design by:Hasibullah khan</h6>
                <h6 className="name">Email    :hasibpak@gmail.com</h6>
            </name>
        </Card>

    );
}

export default WeatherCard;