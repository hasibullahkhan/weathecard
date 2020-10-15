import styled from '@emotion/styled';
import React from 'react';
const Location = (props) => {

    const container = styled.div`
text-align: center`

    return (
        <div className="location">
            <h1 className="city">Karachi</h1>
            <h3 className="country">Pak</h3>
        </div>

    );
}

export default Location;