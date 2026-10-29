import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {Movie} from "../movie/Movie.tsx";
import {Pagination} from "../../pagination/Pagination.tsx";
import {useSearchParams} from "react-router";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {GenreButton} from "../genre-button/GenreButton.tsx";
import './Movies.css'

export const Movies = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const movies = useAppSelector((state) => state.movieSlice.results) || [];
    const selectedGenre = useAppSelector((state) => state.movieSlice.selectedGenre);
    const searchQuery = useAppSelector((state) => state.movieSlice.searchQuery) || '';
    const serverTotalPages = useAppSelector((state) => state.movieSlice.totalPages) || 1;
    useEffect(() => {
        dispatch(movieSliceAction.loadMovies({
            page: currentPage,
            genreId: selectedGenre,
            searchQuery: searchQuery
        }));
    }, [dispatch, currentPage, selectedGenre, searchQuery]);
    const filterMovies = movies;
    const ITEMS_PER_PAGE = 20;
    const displayTotalPages = selectedGenre === null
        ? serverTotalPages
        : Math.ceil(filterMovies.length / ITEMS_PER_PAGE) || 1;
  return (
        <div>
            <GenreButton />
            <div className={'main-movies'}>
                <div className={'movies-container'}>
                    {filterMovies.length > 0 ? (
                        filterMovies.map((movie: MovieType) => (
                            <Movie key={movie.id} {...movie} />
                        ))
                    ) : (<div><h3>There are no films of this genre</h3></div>)}
                </div>
                <Pagination total={displayTotalPages * ITEMS_PER_PAGE} limit={ITEMS_PER_PAGE}/>
            </div>

        </div>
    );
};
