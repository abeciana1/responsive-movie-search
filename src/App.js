import React, {useState} from 'react';
import './App.css';
import env from "react-dotenv";

//! import components here
import MovieSearchForm from './components/MovieSearchForm'
import SearchResultContainer from './components/SearchResultContainer'

//! import layouts here
import DefaultLayout from './layouts/DefaultLayout'



function App() {
  
  const [title, setTitle] = useState('')
  const [movies, setMovies] = useState('')

  const searchTermHandler = (searchTerm) => {
    setTitle(searchTerm)
    movieSearchFetch(title)
  }

  const movieSearchFetch = (title) => {
    let movTitle;

    if (title.split(' ').length > 1) {
      movTitle = title.split(' ').join('%20')
    } else {
      movTitle = title
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.TMDB_API_KEY}&language=en-US&query=${movTitle}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(movies => {
          // console.log(movies.results)
          setMovies(movies.results)
    })

  }

  console.log(movies)

  
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