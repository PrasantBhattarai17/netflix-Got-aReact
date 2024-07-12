import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const MovieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        MainMovieTrailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerfiltered:(state,action)=>{
            state.MainMovieTrailer=action.payload;
        }
    }
});

export const{addMovies,addTrailerfiltered}=MovieSlice.actions;
export default MovieSlice.reducer;