import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useNavigate} from "react-router";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";

export function SearchInput() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const searchQuery = useAppSelector((state) => state.movieSlice.searchQuery);

    const handleSearchChange = (text: string) => {
        dispatch(movieSliceAction.setSearchQuery(text));
        navigate('/');
    };
    return (
        <><input
            type="text"
            maxLength={30}
            placeholder="Enter movie name"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
        /></>
    );
}
