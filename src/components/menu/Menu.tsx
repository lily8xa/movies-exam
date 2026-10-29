import {Link} from "react-router";
import {UserInfo} from "../../pages/userInfo/UserInfo.tsx";
import {SearchInput} from "../search-input/SearchInput.tsx";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>MovieVibe</Link></li>
                <li><Link to={'/genres'}>Menu</Link></li>
                <li><Link to={'/favorite'}>Favorite</Link></li>
                <li><SearchInput/></li>
                <li><UserInfo/></li>
                <li><Link to={''}>Language</Link></li>
            </ul>
        </div>
    );
};
