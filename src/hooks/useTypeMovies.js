import {useDispatch} from "react-redux";
import { url4,options4 } from '../utils/constants'
import { useEffect } from 'react'
import { addTypeMovies} from '../utils/movieSlice';


const useTypeMovies = ()=>{
    const dispatch = useDispatch();

    const getTypeMovies = async () =>{
      
      const response = await fetch(url4, options4 );
      const json = await response.json();
      console.log(json);
      dispatch(addTypeMovies(json));
    }
  
  
    useEffect(()=>{
        getTypeMovies();
    },[])
    
  
}

export default useTypeMovies;
