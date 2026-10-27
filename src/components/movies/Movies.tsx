import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useEffect} from "react";
import {Movie} from "../movie/Movie.tsx";
import {loadMovies} from "../../redux/slices/movieSlice.ts";
import {Pagination} from "../../pagination/Pagination.tsx";
import {useSearchParams} from "react-router";

export const Movies = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page") || "1");
    // const currentGenre = searchParams.get("genre") || "";
    const { results, totalPages } = useAppSelector((state) => state.movieSlice);
    useEffect(() => {
        dispatch(loadMovies(currentPage));
    }, [dispatch, currentPage]);

    console.log(results);
    return (
        <>
            {results.map((movie) => <Movie key={movie.id}{...movie}/>)}
            <Pagination total={(totalPages || 1) * 20} limit={20} />
        </>
    );
};
