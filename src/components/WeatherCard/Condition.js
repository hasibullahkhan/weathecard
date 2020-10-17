import React from 'react'
import styled from '@emotion/styled'
const Temp = styled.h1`font-family: 'Fira Sans',sans-serif;
  font-size: 2rem;
  font-weight: 200;`

const Conditions = styled.h3`font-family: 'Merriweather',sans-serif ;
  font-size: 1.2rem;`
const condition = (props) => {
    return (
        <div>
            <Temp>34 °C</Temp>
            <Conditions>Clouds</Conditions>

        </div>
    );
}

export default condition;