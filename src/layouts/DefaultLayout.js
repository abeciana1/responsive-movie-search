import React from 'react';
import styled from "styled-components";

const LayoutWrapper = styled.section`
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 20%;
    width: 75%;
    color: #28262C;
`

const DefaultLayout = (props) => {
    return (
        <LayoutWrapper>
            {props.children}
        </LayoutWrapper>
    )
}

export default DefaultLayout