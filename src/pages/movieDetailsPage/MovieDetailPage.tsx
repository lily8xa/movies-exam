import {type FC, useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {Genres} from "../../components/genres/Genres.tsx";
import './MovieDetailPage.css'

export const MovieDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const selectedMovie = useAppSelector((state) => state.movieSlice.selectedMovie);
    console.log(selectedMovie)
    const loading = useAppSelector((state) => state.movieSlice.loading);
    const imgBaseUrl ="https://image.tmdb.org/t/p/w500";

    useEffect(() => {if (id) {dispatch(movieSliceAction.loadMovieById(id));}
    }, [dispatch, id]);
    if (loading) return <div style={{ padding: "40px", color: "white", textAlign: "center" }}>Loading...</div>;
    if (!selectedMovie) return <div style={{ padding: "40px", color: "white", textAlign: "center" }}>Movie not found</div>;

    return (
        <div className={'details-main'}>
            <div className={'details-img-but'}>
                <button className={'pag-button'} onClick={() => navigate(-1)}>Back</button>
                <img
                    src={`${imgBaseUrl}${selectedMovie.backdrop_path || selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                />
            </div>
            <div className={'details-disc'}>
                <h1>{selectedMovie.title}</h1>
                <h3 className={'details-disc-hash'}># "{selectedMovie.tagline}"</h3>
                <p>Original Title: {selectedMovie.original_title}. Run time-{selectedMovie.runtime}</p>
                <p>Original Language: {selectedMovie.original_language}</p>
                <p>Release Date: {selectedMovie.release_date}</p>
                <div className={'details-genres'}>Genres: {selectedMovie.genres.map((name, index) => (
                    name ? <Genres key={index} name={name.name} /> : null
                ))}</div>
                <div>
                    <strong>Description:</strong>
                    <p className={'details-description'}>{selectedMovie.overview}</p>
                </div>
            </div>
        </div>
    );
};
