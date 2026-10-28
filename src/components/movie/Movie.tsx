import type {FC} from "react";
import type {MovieType} from "../../models/movieType/MovieType.ts";
import {Rating} from "react-simple-star-rating";
import {useNavigate} from "react-router";


export const Movie:FC<MovieType> = ({id,title,overview,poster_path,genre_ids,vote_average}) => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
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
    return (
        <div onClick={() => navigate(`/movies/${id}`)} >
            <h1>{title}-{id}</h1>
            <img src={`${imgBaseUrl}${poster_path}`} alt={title}/>
            <div>
                <Rating
                    initialValue={vote_average / 2}
                    readonly={true}
                    size={20}
                />
            </div>
            <p>{overview}</p>
            <p>Genres-{movieGenres.join(',')}</p>
        </div>
    );
};
