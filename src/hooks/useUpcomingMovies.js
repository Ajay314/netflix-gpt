import {useDispatch} from "react-redux";
import { url3,options3 } from '../utils/constants'
import { useEffect } from 'react'
import { addUpcomingMovies} from '../utils/movieSlice';


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const getUpcomingMovies = async () =>{
      
      const response = await fetch(url3, options3);
      const json = await response.json();
      console.log(json);
      dispatch(addUpcomingMovies(json));
    }
  
  
    useEffect(()=>{
        getUpcomingMovies();
    },[])
    
  
}

export default useUpcomingMovies;
