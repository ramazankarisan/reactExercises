import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  const [movieName, setMovieName] = useState('');
  const [movieList , setMovieList] = useState([]);
  const [error, setError] = useState('');

  const finId = () => {
    console.log('Searching....')
    fetch(`http://www.omdbapi.com/?apikey=aa0b4ccf&s=${movieName}`)
    .then(response => response.json())
    .then(data => {
      if(data.Response === "True"){
        setMovieList(data.Search)
      }else{
        setError(data.Error)
      }
    })
    .catch(err => console.log(err))
  };

  const searchMovie = (e) => {
    e.preventDefault();
    setMovieName(e.target[0].value)
    setError('')
    
  }
  useEffect(() => {
    if(movieName === ''){
      return
    }
    finId()
  }, [movieName]);

  return (
    <div className="App">
      <h1> React Movie Search</h1>
      <form onSubmit= {searchMovie} >
      <input type="text"  />
      <button type="submit">search</button>
      </form>
      <div>
      { (error === '') ?
        movieList.map(item => {
        return <MovieList key= {item.imdbID}  id = {item.imdbID}/> }) :
        <p>{error}</p>
      }
      
      </div>
    </div>
  );
}

export default App;
