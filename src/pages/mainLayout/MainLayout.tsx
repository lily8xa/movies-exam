import {Menu} from "../../components/menu/Menu.tsx";
import {Outlet, useLocation} from "react-router";
import {SortMenu} from "../../components/sortMenu/SortMenu.tsx";

export const MainLayout = () => {
    const location = useLocation();
    const isFavoritePage = location.pathname === '/favorite';
    return (
        <div>
            <Menu/>
            {!isFavoritePage && <SortMenu/>}
            <Outlet/>
        </div>
    );
};
