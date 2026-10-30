import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {MovieDetailPage} from "../pages/movieDetailsPage/MovieDetailPage.tsx";
import {FavoritePage} from "../pages/favoritePage/FavoritePage.tsx";
import {Movies} from "../components/movies/Movies.tsx";
import {MainMenu} from "../components/mainManu/MainManu.tsx";

export const Router = createBrowserRouter([
    {path: '/', element: <MainLayout />,
        children: [
            {index: true, element: <Movies/> },
            {path:'genres',element:<MainMenu/>},
            {path: 'movies/:id', element: <MovieDetailPage />},
            {path: 'favorite', element: <FavoritePage />
            }
        ]
    }
]);

