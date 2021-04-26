import React from 'react';
import styled from "styled-components";

const CardWrapper = styled.div`
    background-color: transparent;
    padding: 30px;
    border-radius: 30px;
    box-shadow:  24px 24px 60px #c8ccbc,
            -24px -24px 60px #f8f8f8;
`


const SearchCard = (props) => {
    return (
        <CardWrapper>
            {props.children}
        </CardWrapper>
    )
}

export default SearchCard