import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../../config/interfaces/user";

const initialState: Partial<User> = {
    name: '',
    email: '',
};

const userLoggedSlice = createSlice({
    name: 'userLogged',
    initialState: initialState,
    reducers: {
        clearUserLogged: (state) => {
            return initialState;
        },

        setUserLogged: (state, action: PayloadAction<Partial<User>>) => {
            return action.payload;
        },

        // addRecado: (state, action: PayloadAction<Task>) =>{
        //     state.task = [...state.task, action.payload]
        // },

        // removeTask: (state, action: PayloadAction<Partial<Task>>) => {
        //     const index = state.task.findIndex((task)=> task.uid === action.payload.uid)
        //     if (index >= 0) {
        //         state.task.splice(index, 1);
        //     }
        // }
    },

});

export const {clearUserLogged, setUserLogged } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;