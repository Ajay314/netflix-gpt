import {useDispatch} from "react-redux";
import { url1,options1 } from '../utils/constants'
import { useEffect } from 'react'
import { addPopularMovies} from '../utils/movieSlice';


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getPopularMovies = async () =>{
      
      const response = await fetch(url1, options1);
      const json = await response.json();
      console.log(json);
      dispatch(addPopularMovies(json));
    }
  
  
    useEffect(()=>{
        getPopularMovies();
    },[])
    
  
}

export default useNowPlayingMovies;