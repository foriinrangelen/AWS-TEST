import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
        genreList:[]
    },
    reducers:{
        initData:(state, action)=>{
            console.log('[movieSlice.js]: ',action);

            let {payload} = action; //구조분해를 통해 payload속성값만 접근
            console.log('[movieSlice.js]: ',payload);

            state.popularMovies = payload.popular.results
            state.topRatedMovies = payload.topRated.results
            state.upcomingMovies = payload.upcoming.results
            state.genreList = payload.genre.genres
        }
    }
})

export const MovieReducerActions = movieSlice.actions
export default movieSlice.reducer