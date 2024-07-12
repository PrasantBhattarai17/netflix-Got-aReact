import { createSlice } from "@reduxjs/toolkit";


const MovieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        MainMovieTrailer:null,
        TopRatedMovies:null,
        PopularMovies:null,
        UpcomingMovies:null,
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerfiltered:(state,action)=>{
            state.MainMovieTrailer=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.TopRatedMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
    }
});

export const{addMovies,addTrailerfiltered,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=MovieSlice.actions;
export default MovieSlice.reducer;