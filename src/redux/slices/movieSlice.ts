import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {apiService} from "../../services/service/.api.service.ts";
import type {MovieDetailType} from "../../models/movieType/MovieDetailType.ts";

type MovieSliceType={
    results:MovieType[],
    currentPage: number;
    totalPages: number;
    loading: boolean;
    error: string | null;
    selectedGenre: number | null;
    searchQuery: string;
    selectedMovie: MovieDetailType | null;
    isMenuOpen: boolean;
    sortBy: string;
}
const initialState:MovieSliceType={
    results:[],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
    selectedGenre: null,
    searchQuery: '',
    selectedMovie:null,
    isMenuOpen: false,
    sortBy:'rating',

}
interface MovieQueryParams {
    page: number;
    query?: string;
    with_genres?: number;
    sort_by?: string;
}
export const loadMovies= createAsyncThunk<
    MovieType[],
    { page: number; genreId: number | null; searchQuery: string;sortBy:string  }
>(
    'moviesSlice/loadMovies',
    async ({ page, genreId, searchQuery,sortBy }, thunkAPI) => {
        try {
            // 1. Використовуємо строгу типізацію параметрів запиту без any
            const queryParams: MovieQueryParams = {
                page,
                sort_by: sortBy === 'rating' ? 'vote_average.desc' : 'primary_release_date.desc'
            };
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
export const loadMovieById = createAsyncThunk<MovieDetailType,string>(
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
    name: 'movieSlice',
    initialState: initialState,
    reducers: {
        setSelectedGenre: (state, action: PayloadAction<number | null>) => {
            state.selectedGenre = action.payload;
        }, setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        setSortBy: (state, action: PayloadAction<'rating' | 'date'>) => {
            state.sortBy = action.payload;

        }
},

    extraReducers:(builder)=>builder
        .addCase(loadMovies.fulfilled,(state,action:PayloadAction<MovieType[]>)=>{
            state.results=action.payload
        })
        .addCase(loadMovies.rejected,(state,action)=>{
            console.log(state,action)
})
        .addCase(loadMovieById.pending, (state) => {
            state.loading = true;
            state.selectedMovie = null; // Очищуємо старий фільм перед новим завантаженням
        })
        .addCase(loadMovieById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedMovie = action.payload; // <-- Зберігаємо дані з сервера в стейт!
        })
        .addCase(loadMovieById.rejected, (state) => {
            state.loading = false;
            state.error = 'Error';
        })

})
export const movieSliceAction={
    ...movieSlice.actions,loadMovies,loadMovieById
}
