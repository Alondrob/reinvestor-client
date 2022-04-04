import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name:"", email:"", password:"", passwordConfirmation:""
    },

    reducers: {
        signup:(state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.passwordConfirmation = action.payload.passwordConfirmation;
            // state.value = action.payload
        },
        login:(state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.passwordConfirmation = action.payload.passwordConfirmation;
            // state.value = action.payload
        }
    },
});


export const {login, signup} = userSlice.actions
export default userSlice.reducer;