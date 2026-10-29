import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useSearchParams} from "react-router";

export const GenreButton=()=> {
    const dispatch=useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const handleGenreClick =(genreId:number |null)=> {
        dispatch(movieSliceAction.setSelectedGenre(genreId));
        searchParams.set("page", "1");setSearchParams(searchParams);
    };


    return (
        <div> <button onClick={() => handleGenreClick(null)}>Oll</button>
            <button onClick={()=>handleGenreClick(28)}>Action</button>
            <button onClick={()=>handleGenreClick(12)}>Adventure</button>
            <button onClick={()=>handleGenreClick(16)}>Animation</button>
            <button onClick={()=>handleGenreClick(35)}>Comedy</button>
            <button onClick={()=>handleGenreClick(80)}>Crime</button>
            <button onClick={()=>handleGenreClick(99)}>Documentary</button>
            <button onClick={()=>handleGenreClick(18)}>Drama</button>
            <button onClick={()=>handleGenreClick(10751)}>Family</button>
            <button onClick={()=>handleGenreClick(14)}>Fantasy</button>
            <button onClick={()=>handleGenreClick(36)}>History</button>
            <button onClick={()=>handleGenreClick(27)}>Horror</button>
            <button onClick={()=>handleGenreClick(10402)}>Music</button>
            <button onClick={()=>handleGenreClick(9648)}>Mystery</button>
            <button onClick={()=>handleGenreClick(10749)}>Romance</button>
            <button onClick={()=>handleGenreClick(878)}>Science Fiction</button>
            <button onClick={()=>handleGenreClick(10770)}>TV Movie</button>
            <button onClick={()=>handleGenreClick(53)}>Thriller</button>
            <button onClick={()=>handleGenreClick(10752)}>War</button>
            <button onClick={()=>handleGenreClick(37)}>Western</button>
        </div>
    );
}
