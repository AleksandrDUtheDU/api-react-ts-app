import { useDispatch } from "react-redux";
import { AppDispatch } from "../api/store/store";

export const useAppDispath = () => useDispatch<AppDispatch>();
