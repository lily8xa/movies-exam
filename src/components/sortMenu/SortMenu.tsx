import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import './SortMenu.css'

export const SortMenu = () => {
    const dispatch = useAppDispatch();
    const sortBy = useAppSelector((state) => state.movieSlice.sortBy);
    return (
        <div className={'sort-box'}>
            <span className="sort-label">Sort by:</span>
            <select
                value={sortBy}
                onChange={(e) => dispatch(movieSliceAction.setSortBy(e.target.value as 'rating' | 'date'))}
                className="sort-select"
            >
                <option value="rating">Highest Rating</option>
                <option value="date">Release Date</option>
            </select></div>
    );
};
