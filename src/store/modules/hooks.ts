import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../index';


const useAppDispatch = () => useDispatch<AppDispatch>();              // = setItem
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;  // = getItem


export { useAppDispatch, useAppSelector }