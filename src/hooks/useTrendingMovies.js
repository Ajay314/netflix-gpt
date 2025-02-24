import {useDispatch} from "react-redux";
import { url2,options2 } from '../utils/constants'
import { useEffect } from 'react'
import { addTrendingMovies} from '../utils/movieSlice';


const useTrendingMovies = ()=>{
    const dispatch = useDispatch();

    const getTrendingMovies = async () =>{
      
      const response = await fetch(url2, options2);
      const json = await response.json();
      console.log(json);
      dispatch(addTrendingMovies(json));
    }
  
  
    useEffect(()=>{
        getTrendingMovies();
    },[])
    
  
}

export default useTrendingMovies;
