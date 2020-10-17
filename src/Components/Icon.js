import React from 'react'
import styled from '@emotion/styled';

const Icon = ({ imagecondition }) => {
    const Icon = styled.img` 
    width: 40%;
    `;


    var wetherimage = ''
    switch (imagecondition) {

        case "Clear":
            wetherimage = `./img/weather-icons-master/svg/wi-day-sunny.svg`
            // wetherimage = `./img/Cloudy.png`;
            break;
        case "Clouds":
            wetherimage = `./img/weather-icons-master/svg/wi-day-cloudy.svg`
            break;
        case "Haze":
            wetherimage = `./img/weather-icons-master/svg/wi-day-haze.svg`
            break;
        case "Hail":
            wetherimage = `./img/weather-icons-master/svg/wi-hail.svg`
            break;
        case "Fog":
            wetherimage = `./img/weather-icons-master/svg/wi-day-fog.svg`
            break;
        case "Tornado":
            wetherimage = `./img/weather-icons-master/svg/`
            break;
        case "Dust":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        case "Mist":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        case "Snow":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        case "Rain":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        case "Drizzle":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        case "Thunderstorm":
            wetherimage = `./img/weather-icons-master/svg/`;
            break;
        default:
            break;

    }

    return (
        <Icon src={wetherimage} alt="Weather Icon" />
    )
}
export default Icon;