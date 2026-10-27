import {useDispatch} from "react-redux";
import {store} from "../redux/store/store.ts";

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
