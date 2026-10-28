import {createBrowserRouter} from "react-router";
import {MainLayout} from "../pages/mainLayout/MainLayout.tsx";
import {MovieDetailPage} from "../pages/movieDetailsPage/MovieDetailPage.tsx";
import {FavoritePage} from "../pages/favoritePage/FavoritePage.tsx";
import {Movies} from "../components/movies/Movies.tsx";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />, // Головна обгортка сайту, де лежать Menu та Outlet
        children: [
            {
                index: true, // Спрацює автоматично на http://localhost:5173/
                element: <Movies/> // Повертаємо твої фільми, жанри та пагінацію на головну сторінку!
            },
            {
                path: 'movies/:id', // Сторінка деталей фільму (БЕЗ косої риски на початку для children)
                element: <MovieDetailPage />
            },
            {
                path: 'favorite', // Сторінка обраного (БЕЗ косої риски на початку)
                element: <FavoritePage />
            }
        ]
    }
]);

