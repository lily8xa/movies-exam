import {Menu} from "../../components/menu/Menu.tsx";
import {Outlet} from "react-router";
import {SortMenu} from "../../components/sortMenu/SortMenu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <SortMenu/>
            <Outlet/>

        </div>
    );
};
