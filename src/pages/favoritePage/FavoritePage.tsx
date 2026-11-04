import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {Movie} from "../../components/movie/Movie.tsx";
import type {FC} from "react";
import type {MovieType} from "../../models/movieType/MovieType.ts";

export const FavoritePage:FC = () => {
    const favoriteMovies = useAppSelector((state) => state.movieSlice.favorites);
    if (favoriteMovies.length === 0) {
        return <div className={'error-h'}>No movie yet🎬</div>;
    }
    return (
        <div className={'main-movies'}>{favoriteMovies.map((movie:MovieType) => (
            <Movie key={movie.id} {...movie} />
        ))}</div>
    );
};
