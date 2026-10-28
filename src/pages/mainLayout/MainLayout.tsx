import {Movies} from "../../components/movies/Movies.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Movies/>

        </div>
    );
};
