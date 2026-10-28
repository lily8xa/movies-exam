import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";

export const GenreButton=()=> {
    const dispatch=useAppDispatch()


    return (
        <div> <button onClick={() => dispatch(movieSliceAction.setSelectedGenre(null))}>Oll</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(28))}>Action</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(12))}>Adventure</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(16))}>Animation</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(35))}>Comedy</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(80))}>Crime</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(99))}>Documentary</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(18))}>Drama</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(10751))}>Family</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(14))}>Fantasy</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(36))}>History</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(27))}>Horror</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(10402))}>Music</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(9648))}>Mystery</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(10749))}>Romance</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(878))}>Science Fiction</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(10770))}>TV Movie</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(53))}>Thriller</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(10752))}>War</button>
            <button onClick={()=>dispatch(movieSliceAction.setSelectedGenre(37))}>Western</button>





        </div>
    );
}
