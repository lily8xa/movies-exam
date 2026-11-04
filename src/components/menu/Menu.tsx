import {Link} from "react-router";
import {UserInfo} from "../../pages/userInfo/UserInfo.tsx";
import {SearchInput} from "../search-input/SearchInput.tsx";
import './Menu.css'
import {GenresMenu} from "../GenresManu/GenresManu.tsx";
import {useAppSelector} from "../../hooks/UseAppSelector.tsx";
import {GenreButton} from "../genre-button/GenreButton.tsx";

export const Menu = () => {
    const isMenuOpen = useAppSelector((state) => state.movieSlice.isMenuOpen);

    return (
        <div className={'main-menu'}>
            <ul className={'main-li'}>
                <li className={'logo'}><Link to={'/'}>MovieVibe</Link></li>
                <li className={'genre'}><GenresMenu/></li>
                <li><Link to={'/favorite'}>Favorite</Link></li>
                <li><SearchInput/></li>
                <li><UserInfo/></li>
            </ul>
            <div>{isMenuOpen && <GenreButton/>}</div>
        </div>
    );
};
