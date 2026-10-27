export const Genres = () => {

//     const dispatch = useAppDispatch();
//     const [searchParams, setSearchParams] = useSearchParams();
//
//
//     const currentGenre = searchParams.get("genre") || ""; // Читаємо обраний жанр з URL
//
//     const { results, totalPages } = useAppSelector((state) => state.movieSlice);
//
//     // Слідкуємо і за сторінкою, і за жанром!
//     useEffect(() => {
//         dispatch(loadMovies({genreId: currentGenre }));
//     }, [dispatch, currentGenre]);
//
//     const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//         // При зміні жанру обов'язково скидаємо сторінку на 1
//         setSearchParams({ genre: e.target.value, page: "1" });
//     };
//
//     return (
//         <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
//             <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "24px" }}>
//                 <h2>Популярні фільми</h2>
//
//                 {/* ВИПАДАЮЧИЙ СПИСОК ЖАНРІВ */}
//                 <select value={currentGenre} onChange={handleGenreChange} style={{ padding: "8px", borderRadius: "6px" }}>
//                     <option value="">Всі жанри</option>
//                     <option value="28">Бойовик (Action)</option>
//                     <option value="35">Комедія (Comedy)</option>
//                     <option value="878">Фантастика (Sci-Fi)</option>
//                     <option value="12">Пригоди (Adventure)</option>
//                 </select>
//             </div>
//
//             {/* Сітка фільмів */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "24px" }}>
//                 {results && results.map((movie) => (
//                     <Movie key={movie.id} {...movie} />
//                 ))}
//             </div>
//
//             <Pagination total={(totalPages || 1) * 20} limit={20} />
//         </div>
//     );
// };
    // return (
    //     <div><ul>
    //         <li><Link to={''}>Action</Link></li>
    //         <li><Link to={''}>Adventure</Link></li>
    //         <li><Link to={''}>Animation</Link></li>
    //         <li><Link to={''}>Comedy</Link></li>
    //         <li><Link to={''}>Crime</Link></li>
    //         <li><Link to={''}>Drama</Link></li>
    //         <li><Link to={''}>Family</Link></li>
    //         <li><Link to={''}>Fantasy</Link></li>
    //         <li><Link to={''}>History</Link></li>
    //         <li><Link to={''}>Horror</Link></li>
    //         <li><Link to={''}>Music</Link></li>
    //         <li><Link to={''}>Mystery</Link></li>
    //         <li><Link to={''}>Romance</Link></li>
    //         <li><Link to={''}>Science Fiction</Link></li>
    //         <li><Link to={''}>TV Movie</Link></li>
    //         <li><Link to={''}>Thriller</Link></li>
    //         <li><Link to={''}>War</Link></li>
    //         <li><Link to={''}>Western</Link></li>
    //     </ul>
    //     </div>
    // );

}
