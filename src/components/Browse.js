import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTypeMovies from '../hooks/useTypeMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';




const Browse = () => {

     const showGptSearch = useSelector(store=> store.gpt.showGptSearch);


    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();
    useTypeMovies();


  return (
    <div>
      <Header />
      {
        showGptSearch ?
        <GptSearch /> : (
          <> 
           <MainContainer />
           <SecondaryContainer />
           </>
        )
        }
      
    </div>
  )
}

export default Browse