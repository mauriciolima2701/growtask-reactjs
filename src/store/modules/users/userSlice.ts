import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../../config/interfaces/user";


const initialState: User[] = [];

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) =>{
            return [...state, action.payload]
        },

    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;