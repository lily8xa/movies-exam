import {Link, useNavigate} from "react-router";
import {useAppDispatch} from "../../hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {movieSliceAction} from "../../redux/slices/movieSlice.ts";
import {UserInfo} from "../../pages/userInfo/UserInfo.tsx";

export const Menu = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Отримуємо поточний текст пошуку з Redux
    const searchQuery = useAppSelector((state) => state.movieSlice.searchQuery);

    const handleSearchChange = (text: string) => {
        // 1. Записуємо текст у глобальний стейт Redux
        dispatch(movieSliceAction.setSearchQuery(text));

        // 2. Якщо користувач не на головній сторінці фільмів, перекидаємо його туди для показу результатів
        navigate('/');
    };
    return (
        <div>
            <ul>
                <li><Link to={'/'}>MovieVibe</Link></li>
                <li><Link to={'/genres'}>Menu</Link></li>
                <li><Link to={'/favorite'}>Favorite</Link></li>
                <li>
                    <input
                        type="text"
                        placeholder="Пошук фільмів..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        style={{
                            padding: "6px 12px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            fontSize: "14px"
                        }}
                    />
                </li>
                {/*<li><Link to={'user'}>User Info</Link></li>*/}
                <li><UserInfo/></li>
                <li><Link to={''}>Language</Link></li>
            </ul>
        </div>
    );
};
