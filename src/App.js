import React, {useState} from 'react';
import './App.css';

//! import components here
import MovieSearchForm from './components/MovieSearchForm'

//! import layouts here
import DefaultLayout from './layouts/DefaultLayout'



function App() {
  
  const [title, setTitle] = useState('')

  const searchTermHandler = (searchTerm) => {
    setTitle(searchTerm)
  }

  console.log(title)

  return (
    <DefaultLayout>
      <MovieSearchForm searchTermHandler={searchTermHandler} />
      <br />
      <br />

    </DefaultLayout>
  );
}

export default App;