import React from 'react'
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img` 
    width: 40%;
    `;
    var icon = ''
    switch (props.condition) {

        case "Clear":
            icon = `./img/Mostly-Sunny-2x.png`
            break;
        case "Clouds":
            icon = `./img/Mostly Cloud-2x.png`
            break;
        case "Haze":
            icon = `./img/Mostly Haze-2x.png`
            break;
        case "Hail":
            icon = `./img/Mostly Hail-2x.svg`
            break;
        case "Fog":
            icon = `./img/Mostly Fog-2x.svg`
            break;
        case "Tornado":
            icon = `./img/Mostly Tornado-2x.svg`
            break;
        default:
            break;

    }

    return (
        <Icon src={icon} alt="Weather Icon" />

    )
}
export default Icon;
