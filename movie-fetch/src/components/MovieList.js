import React, { useEffect, useState } from 'react'

function MovieList(props) {

  const [movieList, setMovieList] = useState([])

  const fetchMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=aa0b4ccf&i=${props.id}`)
    .then(response => response.json())
    .then(data => {
      setMovieList(data)
    })
    .catch(err => console.log(err))
  }
  useEffect (() => {
   fetchMovie();
  }, [])


  return (
    <div>
      <div className="border"> <h4>{movieList.Title}</h4>
      <p> <b>Actors: </b> {movieList.Actors}</p>
        <p><b> Plot: </b>{movieList.Plot}</p>
        <p> <b> Genre: </b>{movieList.Genre}</p>
        <img src={movieList.Poster} alt="" />
       </div>
    </div>
  )
}

export default MovieList
