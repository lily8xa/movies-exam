import {type FC, useEffect} from "react";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {useNavigate} from "react-router";
import './Movie.css'
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {loadGenres, movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {PosterPreview} from "../posterPreview/PosterPreview.tsx";
import {StarsRating} from "../starsRating/StarsRating.tsx";
import {Genres} from "../genres/Genres.tsx";


export const Movie:FC<MovieType> = ({id,title,poster_path,genre_ids,vote_average,release_date}) => {
    const navigate = useNavigate();
    const favoriteMovies = useAppSelector((state) => state.movieSlice.favorites);
    const isCurrentlyFavorite = favoriteMovies.some((item) => item.id === id);
    const allGenres = useAppSelector((state) => state.movieSlice.genres) || [];
    const movieGenres = (genre_ids || [])
        .map((genreId) => allGenres.find((g) => g.id === genreId))
        .filter((g): g is { id: number; name: string } => !!g);
    const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(loadGenres());
    }, [dispatch]);
    return (
        <div className={'movie-main'} onClick={() => navigate(`/movies/${id}`)} >
            <button
                onClick={(e) => {e.stopPropagation();
                    dispatch(movieSliceAction.toggleFavorite({ id, title, poster_path, genre_ids, vote_average, release_date }as MovieType));
                }} className="flex items-center gap-2 mt-4 text-white">{isCurrentlyFavorite ? '❤️ In Favorites' : '🤍 Love it'}
            </button>
            <PosterPreview posterPath={poster_path} title={title}/>
            <div className={'movie-rating-wrapper'}><StarsRating voteAverage={vote_average} /></div>
            <div className={'name-genre'}>
                <h1>{title}</h1>
                <p>{release_date}</p>
                {movieGenres.length > 0 && (
                    <div className={'details-genres'}>
                        <span>Genres: </span>
                        {movieGenres.map((genre, index) => (
                            <Genres key={genre.id} id={genre.id} name={genre.name} isLast={index === movieGenres.length - 1}/>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};
