import {createSlice} from "@reduxjs/toolkit";
import type {MovieType} from "../../models/movieType/MovieType.ts";
type MovieSliceType={
    results:MovieType[]
}
const initialState:MovieSliceType={results:[]}
export const movieSlice=createSlice({
    name:'movieSlice',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>builder
})
