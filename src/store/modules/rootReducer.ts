import { combineReducers } from "@reduxjs/toolkit";
import userLogged from "./userLogged/userLoggedSlice";
import users from "./users/userSlice"
import tasksUser from "./task/taskSlice"


const rootReducer = combineReducers({
    userLogged,
    users,
    tasksUser,
});

export default rootReducer;