import {useSelector} from "react-redux";
import {store} from "../redux/store/store.ts";

export const useAppSelector =useSelector.withTypes<ReturnType<typeof store.getState>>();
