import React from "react"
import styled from '@emotion/styled';

const Designby = ({ creatdby, email }) => {
    return (

        <name>
            <h6 className="name">-------------------------------------------------</h6>
            <h6 className="name">Design by :{creatdby}</h6>
            <h6 className="name">Email    :{email}</h6>
        </name>

    );
}

export default Designby;