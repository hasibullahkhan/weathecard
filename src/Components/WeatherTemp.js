import React from 'react'
import styled from '@emotion/styled'
const WeatherTemprature = ({ temp, imagecondition }) => {

    const Temp = styled.h1`font-family: 'Fira Sans',sans-serif;
  font-size: 2rem;
  font-weight: 200;`

    const Conditions = styled.h3`font-family: 'Merriweather',sans-serif ;
  font-size: 1.8rem;`
    return (<div>
        <Temp>{temp} °C</Temp>
        <Conditions>{imagecondition}</Conditions>
    </div>);
}

export default WeatherTemprature;