import {Link, Outlet} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>MovieVibe</Link></li>
                <li><Link to={'/genres'}>Menu</Link></li>
                <li><Link to={'/favorite'}>Favorite</Link></li>
                <input type="text"/>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={''}>Language</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};
