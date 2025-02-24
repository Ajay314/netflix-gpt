import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-50  relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"TV Shows"} movies={movies.typeMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer