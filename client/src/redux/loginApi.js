import { loginFailure, loginStart, loginSuccess } from "./user.redux";
import { publicUrl } from "../requestUrl";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try {
        const res = await publicUrl.post("/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}