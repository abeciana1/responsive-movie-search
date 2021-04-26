import React, {useState} from 'react';
import './App.css';
import env from "react-dotenv";

//! import components here
import MovieSearchForm from './components/MovieSearchForm'
import SearchResultContainer from './components/SearchResultContainer'

//! import layouts here
import DefaultLayout from './layouts/DefaultLayout'



function App() {
  
  const [movies, setMovies] = useState('')

  const searchTermHandler = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.TMDB_API_KEY}&language=en-US&query=${searchTerm.split(' ').join('%20')}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(movies => {
          setMovies(movies.results)
    })

  }
  
  return (
    <DefaultLayout>
      <MovieSearchForm searchTermHandler={searchTermHandler} />
      <br />
      <br />
      <SearchResultContainer movies={movies} />
    </DefaultLayout>
  );
}

export default App;