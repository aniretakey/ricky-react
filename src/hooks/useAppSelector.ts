import { RootStore } from "../store/store.ts";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector