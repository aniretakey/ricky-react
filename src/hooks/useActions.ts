import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions as authActions } from "../store/auth/auth.slice.ts";

const actions = {
	...authActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}