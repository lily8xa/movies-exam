import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {apiService} from "../../services/service/.api.service.ts";
type MovieSliceType={
    results:MovieType[],
    currentPage: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
}
const initialState:MovieSliceType={
    results:[],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null}

export const loadMovies=createAsyncThunk<MovieType[],number>(
    'postSlice,loadPosts',
    async(page:number,thuncAPI)=>{
        try{
            const response = await apiService.get<{ results: MovieType[] }>('/3/discover/movie', {params: { page }});
            const movies = response.data.results;
            console.log(movies);
            return thuncAPI.fulfillWithValue(movies);
        }catch (error){
            console.log(error);
            return thuncAPI.rejectWithValue('some error')
        }
    }
)
export const movieSlice=createSlice({
    name:'movieSlice',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>builder
        .addCase(loadMovies.fulfilled,(state,action:PayloadAction<MovieType[]>)=>{
            state.results=action.payload
        })
        .addCase(loadMovies.rejected,(state,action)=>{
            console.log(state,action)
})
})
export const movieSliceAction={
    ...movieSlice.actions,loadMovies
}
