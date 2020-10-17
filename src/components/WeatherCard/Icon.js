import React from 'react'
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img` 
    width: 40%;
    `;
    var icon = ''

    console.log(props);

    switch (props.condition) {

        case "Clear":
            icon = `./img/weather-icons-master/svg/wi-day-sunny.svg`
            // icon = `./img/Cloudy.png`;
            break;
        case "Clouds":
            icon = `./img/weather-icons-master/svg/wi-day-cloudy.svg`
            break;
        case "Haze":
            icon = `./img/weather-icons-master/svg/wi-day-haze.svg`
            break;
        case "Hail":
            icon = `./img/weather-icons-master/svg/wi-hail.svg`
            break;
        case "Fog":
            icon = `./img/weather-icons-master/svg/`
            break;
        case "Tornado":
            icon = `./img/weather-icons-master/svg/`
            break;
        case "Dust":
            icon = `./img/weather-icons-master/svg/`;
            break;
        case "Mist":
            icon = `./img/weather-icons-master/svg/`;
            break;
        case "Snow":
            icon = `./img/weather-icons-master/svg/`;
            break;
        case "Rain":
            icon = `./img/weather-icons-master/svg/`;
            break;
        case "Drizzle":
            icon = `./img/weather-icons-master/svg/`;
            break;
        case "Thunderstorm":
            icon = `./img/weather-icons-master/svg/`;
            break;
        default:
            break;

    }

    return (
        <Icon src={icon} alt="Weather Icon" />

    )
}
export default Icon;
