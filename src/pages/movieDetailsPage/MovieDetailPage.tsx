import {type FC, useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import './MovieDetailPage.css'
import {MovieInfo} from "../../components/movieInfo/MovieInfo.tsx";
import {PosterPreview} from "../../components/posterPreview/PosterPreview.tsx";
import {Genres} from "../../components/genres/Genres.tsx";

export const MovieDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const selectedMovie = useAppSelector((state) => state.movieSlice.selectedMovie);
    console.log(selectedMovie)
    const loading = useAppSelector((state) => state.movieSlice.loading);
    useEffect(() => {if (id) {dispatch(movieSliceAction.loadMovieById(id));}
    }, [dispatch, id]);
    if (loading) return <div className={'error-h'}>Loading...</div>;
    if (!selectedMovie) return <div className={'error-h'}>Movie not found</div>;
    return (
        <div className={'details-main'}>
            <div className={'details-img-but'}>
                <button className={'pag-button'} onClick={() => navigate(-1)}>Back</button>
                <PosterPreview backdropPath={selectedMovie.backdrop_path} title={selectedMovie.title}/>
                {selectedMovie.genres && selectedMovie.genres.length > 0 && (
                    <div className={'details-genres'}>
                        <span>Genres: </span>
                        {selectedMovie.genres.map((genre, index) => {
                            const isLast = index === selectedMovie.genres.length - 1;
                            return (
                                <span key={genre.id}>
          <Genres id={genre.id} name={genre.name} />
                                    {!isLast && ", "}
        </span>
                            );
                        })}
                    </div>
                )}
            </div>

            <MovieInfo title={selectedMovie.title} tag={selectedMovie.tagline} originalTitle={selectedMovie.original_title} originalLanguage={selectedMovie
                .original_language} runtime={selectedMovie.runtime} releaseDate={selectedMovie.release_date} overview={selectedMovie.overview}/>
        </div>
    );
};
