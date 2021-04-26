import React from 'react';
import SearchResultCard from './SearchResultCard'

const SearchResultContainer = (props) => {

    const moviesMap = (movs) => {
        return movs.map(movie => <SearchResultCard movie={movie} /> )
    }

    return (
        <React.Fragment>
            {props.movies ? moviesMap(props.movies) : null}
        </React.Fragment>
    )
}

export default SearchResultContainer