import React from 'react';
// import env from "react-dotenv";



const SearchResultContainer = (props) => {

    const moviesMap = (movs) => {
        console.log(movs)
        // movs.map(movie => movie)
    }

    return (
        <React.Fragment>
            {moviesMap(props.movies)}
        </React.Fragment>
    )
}

export default SearchResultContainer