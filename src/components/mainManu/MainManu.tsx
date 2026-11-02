import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";

export function MainMenu() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(movieSliceAction.toggleMenu())}>
                Genres
            </button></>
    );
}
