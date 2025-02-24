import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null
    },
    reducers:{
        addNowPlayingMovies : (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies =action.payload;
        },
        addTrendingMovies : (state,action) =>{
            state.trendingMovies = action.payload;
        },
        addUpcomingMovies : (state,action) =>{
            state.upcomingMovies = action.payload;
        },
        addTypeMovies : (state,action) =>{
            state.typeMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTrendingMovies,addUpcomingMovies,addTypeMovies} = movieSlice.actions;
export default movieSlice.reducer;