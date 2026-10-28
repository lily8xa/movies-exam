import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {apiService} from "../../services/service/.api.service.ts";
type MovieSliceType={
    results:MovieType[],
    currentPage: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
    selectedGenre: number | null;
    searchQuery: string;
    selectedMovie: null;
}
const initialState:MovieSliceType={
    results:[],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
    selectedGenre: null,
    searchQuery: '',
    selectedMovie:null
}
interface MovieQueryParams {
    page: number;
    query?: string;
    with_genres?: number;
}
export const loadMovies= createAsyncThunk<
    MovieType[],
    { page: number; genreId: number | null; searchQuery: string }
>(
    'moviesSlice/loadMovies',
    async ({ page, genreId, searchQuery }, thunkAPI) => {
        try {
            // 1. Використовуємо строгу типізацію параметрів запиту без any
            const queryParams: MovieQueryParams = { page };
            let currentUrl = '/3/discover/movie';

            // 2. Якщо користувач щось ввів — перемикаємося на пошуковий ендпоінт
            if (searchQuery && searchQuery.trim() !== '') {
                currentUrl = '/3/search/movie';
                queryParams.query = searchQuery; // Додаємо обов'язковий текст для пошуку
            } else if (genreId !== null) {
                queryParams.with_genres = genreId; // Якщо пошуку немає, фільтруємо за жанром
            }

            // 3. Відправляємо динамічний URL та параметри в апі-сервіс
            const response = await apiService.get<{ results: MovieType[] }>(currentUrl, {
                params: queryParams
            });

            const movies = response.data.results;
            return thunkAPI.fulfillWithValue(movies);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('some error');
        }
    }
);
export const loadMovieById = createAsyncThunk<string>(
    'moviesSlice/loadMovieById',
    async (movieId, thunkAPI) => {
        try {
            // Робимо запит до TMDB за конкретним ID фільму
            const response = await apiService.get(`/3/movie/${movieId}`);
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('Error loading movie details');
        }
    }
);
export const movieSlice=createSlice({
    name:'movieSlice',
    initialState:initialState,
    reducers:{setSelectedGenre: (state, action: PayloadAction<number | null>) => {
            state.selectedGenre = action.payload;
        },  setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
        },
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
