import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.ts";
import {Router} from "./routes/Router.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={Router}/>
    </Provider>,
)
