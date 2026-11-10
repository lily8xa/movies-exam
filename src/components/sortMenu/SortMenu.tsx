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
                <option value="vote_average.desc">Highest Rating</option>
                <option value="primary_release_date.desc">Release Date</option>
            </select></div>
    );
};
