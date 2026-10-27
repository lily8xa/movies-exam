import {Outlet} from "react-router";
import {Movies} from "../../components/movies/Movies.tsx";

export const MainLayout = () => {
    return (
        <div> <Outlet/>
            <Movies/>

        </div>
    );
};
