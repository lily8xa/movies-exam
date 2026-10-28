import {type FC, useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";

export const MovieDetailPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Отримуємо об'єкт фільму з Redux стейту
    const selectedMovie = useAppSelector((state) => state.movieSlice.selectedMovie);
    const loading = useAppSelector((state) => state.movieSlice.loading);

    const imgBaseUrl = "https://tmdb.org";

    useEffect(() => {
        if (id) {
            dispatch(movieSliceAction.loadMovieById(id));
        }
    }, [dispatch, id]);

    // Захист від завантаження: поки даних немає — не рендеримо JSX
    if (loading) return <div style={{ padding: "40px", color: "white", textAlign: "center" }}>Завантаження...</div>;
    if (!selectedMovie) return <div style={{ padding: "40px", color: "white", textAlign: "center" }}>Фільм не знайдено</div>;

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", display: "flex", gap: "20px" }}>

            {/* Ліва колонка */}
            <div style={{ flex: "1" }}>
                <button onClick={() => navigate(-1)} style={{ padding: "8px 16px", marginBottom: "15px", cursor: "pointer" }}>
                    ← Назад
                </button>
                <img
                    src={`${imgBaseUrl}${selectedMovie.backdrop_path || selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                />
            </div>

            {/* Права колонка */}
            <div style={{ flex: "2", color: "white" }}>
                <h1>{selectedMovie.title}</h1>
                <h3>Original Title: {selectedMovie.original_title}</h3>
                <p><strong>Original Language:</strong> {selectedMovie.original_language}</p>
                <p><strong>Release Date:</strong> {selectedMovie.release_date}</p>

                <div style={{ margin: "15px 0" }}>
                    <strong>Description:</strong>
                    <p style={{ lineHeight: "1.5" }}>{selectedMovie.overview}</p>
                </div>
            </div>

        </div>
    );
};
