import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {Menu} from "../components/menu/Menu.tsx";
import {GenrePage} from "../pages/genresPage/GenrePage.tsx";
import {FavoritePage} from "../pages/favoritePage/FavoritePage.tsx";
import {LoginPage} from "../pages/login/LoginPage.tsx";

export const Router = createBrowserRouter([
    {path:'',element:<MainLayout/>,
        children:[
            {path:'/',element:<Menu/>},
            {path:'/genres',element:<GenrePage/>},
            {path:'/favorite',element:<FavoritePage/>},
            {path:'/login',element:<LoginPage/>}
        ]
}])
