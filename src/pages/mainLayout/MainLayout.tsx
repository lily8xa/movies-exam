import {Menu} from "../../components/menu/Menu.tsx";
import {Outlet, useLocation} from "react-router";
import {SortMenu} from "../../components/sortMenu/SortMenu.tsx";

export const MainLayout = () => {
    const location = useLocation();

    // Перевіряємо, чи поточний шлях є сторінкою улюблених фільмів
    // (замініть '/favorite', якщо у вашому роутингу шлях називається інакше, наприклад '/favorites')
    const isFavoritePage = location.pathname === '/favorite';
    return (
        <div>
            <Menu/>
            {!isFavoritePage && <SortMenu/>}
            <Outlet/>
        </div>
    );
};
