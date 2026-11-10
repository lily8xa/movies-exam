import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {Movie} from "../movie/Movie.tsx";
import {Pagination} from "../../pagination/Pagination.tsx";
import {useSearchParams} from "react-router";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import './Movies.css'

export const Movies = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const movies = useAppSelector((state) => state.movieSlice.results);
    console.log(movies)
    const sortBy: string = useAppSelector((state) => state.movieSlice.sortBy);
    const selectedGenre = useAppSelector((state) => state.movieSlice.selectedGenre);
    const searchQuery = useAppSelector((state) => state.movieSlice.searchQuery) || '';
    const loading = useAppSelector((state) => state.movieSlice.loading);
    useEffect(() => {
        dispatch(movieSliceAction.loadMovies({
            page: currentPage,
            genreId: selectedGenre,
            sortBy: sortBy,
            searchQuery: searchQuery
        }));
    }, [dispatch, currentPage, selectedGenre, sortBy, searchQuery]);
    const serverTotalPages = useAppSelector((state) => state.movieSlice.serverTotalPages) || 1;
    const ITEMS_PER_PAGE = 20;
    if (loading) return <div className={'error-h'}>Loading...</div>;
    if (!movies) return <div className={'error-h'}>Movie not found</div>;
    return (
        <div>
            <div className={'main-movies'}>
                <div className={'movies-container'}>
                    {movies.length > 0 ? (
                        movies.map((movie: MovieType) => (
                            <Movie key={movie.id} {...movie} />
                        ))
                    ) : (<div><h3 className={'error-h'}>There are no films</h3></div>)}
                </div>
                <Pagination total={serverTotalPages * ITEMS_PER_PAGE} limit={ITEMS_PER_PAGE} /></div>
        </div>
    );
};
