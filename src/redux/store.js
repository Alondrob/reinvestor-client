import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userSlice } from "./userSlice";


export default configureStore({
    reducer: {
       user: userSlice.reducer,
    },
})