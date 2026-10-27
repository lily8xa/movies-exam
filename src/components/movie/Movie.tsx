import type {FC} from "react";
import type {MovieType} from "../../models/movieType/MovieType.ts";

export const Movie:FC<MovieType> = ({id,title,overview,poster_path}) => {
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <div>
            <h1>{title}-{id}</h1>
            <p>{overview}</p>
            <img src={`${imgBaseUrl}${poster_path}`} alt={title}/>
        </div>
    );
};
