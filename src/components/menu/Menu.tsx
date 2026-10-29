import {Link} from "react-router";
import {UserInfo} from "../../pages/userInfo/UserInfo.tsx";
import {SearchInput} from "../search-input/SearchInput.tsx";
import './Menu.css'

export const Menu = () => {
    return (
        <div className={'main-menu'}>
            <ul className={'main-li'}>
                <li className={'logo'}><Link to={'/'}>MovieVibe</Link></li>
                <li><Link to={'/genres'}>Menu</Link></li>
                <li><Link to={'/favorite'}>Favorite</Link></li>
                <li><SearchInput/></li>
                <li><UserInfo/></li>
            </ul>
        </div>
    );
};
