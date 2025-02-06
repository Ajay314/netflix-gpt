import {useDispatch} from "react-redux";
import { url,options } from '../utils/constants'
import { useEffect } from 'react'
import {addNowPlayingMovies} from '../utils/movieSlice';


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getMovies = async () =>{
      
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json));
    }
  
  
    useEffect(()=>{
      getMovies();
    },[])
    
  
}

export default useNowPlayingMovies;