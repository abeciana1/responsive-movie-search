import React from 'react';

import '../css/movie-search-form.css'

class MovieSearchForm extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({
            searchTerm : e.target.value
        })
        this.props.searchTermHandler(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <input
                        class="search-bar"
                        type="text"
                        name="searchTerm"
                        placeholder="Type a movie title"
                        value={this.state.searchTerm}
                        onChange={this.changeHandler}
                        />
                </form>
            </React.Fragment>
        )
    }
}

export default MovieSearchForm