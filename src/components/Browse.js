import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTypeMovies from '../hooks/useTypeMovies';




const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    useTypeMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse