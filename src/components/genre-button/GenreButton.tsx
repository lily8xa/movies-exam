import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useSearchParams} from "react-router";
import './GenreButton.css'

export const GenreButton=()=> {
    const dispatch=useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const handleGenreClick =(genreId:number |null)=> {
        dispatch(movieSliceAction.setSelectedGenre(genreId));
        searchParams.set("page", "1");setSearchParams(searchParams);
    };


    return (
        <div className={'main-buttons'}>
            <button className={'movie-btn'} onClick={() => handleGenreClick(null)}>Oll</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(28)}>Action</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(12)}>Adventure</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(16)}>Animation</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(35)}>Comedy</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(80)}>Crime</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(99)}>Documentary</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(18)}>Drama</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(10751)}>Family</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(14)}>Fantasy</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(36)}>History</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(27)}>Horror</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(10402)}>Music</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(9648)}>Mystery</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(10749)}>Romance</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(878)}>Science Fiction</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(10770)}>TV Movie</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(53)}>Thriller</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(10752)}>War</button>
            <button className={'movie-btn'} onClick={()=>handleGenreClick(37)}>Western</button>
        </div>
    );
}
