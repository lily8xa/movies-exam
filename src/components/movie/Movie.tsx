import {type FC} from "react";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {useNavigate} from "react-router";
import {Genres} from "../genres/Genres.tsx";
import './Movie.css'
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {PosterPreview} from "../posterPreview/PosterPreview.tsx";
import {StarsRating} from "../starsRating/StarsRating.tsx";


export const Movie:FC<MovieType> = ({id,title,poster_path,genre_ids,vote_average,release_date}) => {
    const navigate = useNavigate();
    const genreName:{id:number,name:string}[]=[
        {id: 28, name: "Action"},
        {id: 12, name: "Adventure"},
        {id: 16,name: "Animation"},
        {id: 35,name: "Comedy"},
        {id: 80, name: "Crime"},
        {id: 99,name: "Documentary"},
        {id: 18,name: "Drama"},
        {id: 10751,name: "Family"},
        {id: 14, name: "Fantasy"},
        {id: 36,name: "History"},
        {id: 27,name: "Horror"},
        {id: 10402,name: "Music"},
        {id: 9648,name: "Mystery"},
        {id: 10749,name: "Romance"},
        {id: 878, name: "Science Fiction"},
        {id: 10770, name: "TV Movie"},
        {id: 53, name: "Thriller"},
        {id: 10752, name: "War"},
        {id: 37, name: "Western"}
    ];
    const movieGenres = genre_ids
        .map((id) => genreName.find((g) => g.id === id)?.name)
        .filter(Boolean);
    const favoriteMovies = useAppSelector((state) => state.movieSlice.favorites);
    const isCurrentlyFavorite = favoriteMovies.some((item) => item.id === id);

    const dispatch=useAppDispatch()
    return (
        <div className={'movie-main'} onClick={() => navigate(`/movies/${id}`)} >
            <button
                onClick={(e) => {e.stopPropagation();
                    dispatch(movieSliceAction.toggleFavorite({ id, title, poster_path, genre_ids, vote_average, release_date }as MovieType));
                }}
                className="flex items-center gap-2 mt-4 text-white"
            >
                {isCurrentlyFavorite ? '❤️ In Favorites' : '🤍 Love it'}
            </button>
            <PosterPreview posterPath={poster_path} title={title}/>
            <div className={'movie-rating-wrapper'}><StarsRating voteAverage={vote_average} /></div>
            <div className={'name-genre'}>
                <h1>{title}</h1>
                <p>{release_date}</p>
                <div className={'genres-movie'}>
                    Genres: {' '}{movieGenres
                        .filter((name): name is string => typeof name === 'string' && name.trim() !== '')
                        .map((name, index, array) => (
                            <span key={index} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Genres name={name} id={id}/>{index < array.length - 1 && <span style={{ marginRight: '4px' }}>,</span>}</span>))}
                </div>
            </div>

        </div>
    );
};
