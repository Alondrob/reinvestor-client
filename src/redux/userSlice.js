import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
    'users/signupUser',
    async ({ name, email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/users',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                }
            );
            let data = await response.json();
            console.log('data', data);

            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return { ...data, username: name, email: email };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/auth',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            let data = await response.json();
            console.log('response', data);
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const fetchUserBytoken = createAsyncThunk(
    'users/fetchUserByToken',
    async ({ token }, thunkAPI) => {
        try {
            const response = await fetch(
                'https://mock-user-auth-server.herokuapp.com/api/v1/users',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: token,
                        'Content-Type': 'application/json',
                    },
                }
            );
            let data = await response.json();
            console.log('data', data, response.status);

            if (response.status === 200) {
                return { ...data };
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (e) {
            console.log('Error', e.response.data);
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;

            return state;
        },
    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.user.email;
            state.username = payload.user.name;
        },
        [signupUser.pending]: (state) => {
            state.isFetching = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.pending]: (state) => {
            state.isFetching = true;
        },
        [fetchUserBytoken.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;

            state.email = payload.email;
            state.username = payload.name;
        },
        [fetchUserBytoken.rejected]: (state) => {
            console.log('fetchUserBytoken');
            state.isFetching = false;
            state.isError = true;
        },
    },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;















// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         name:"", email:"", password:"", passwordConfirmation:"", 
//         isFetching: false, isSuccess: false, 
//         isError: false, errorMessage: '', token: ''
//     },

//     reducers: {
//         signup:(state, action) => {
//             // state.name = action.payload.name;
//             // state.email = action.payload.email;
//             // state.password = action.payload.password;
//             // state.passwordConfirmation = action.payload.passwordConfirmation;
//             // // state.value = action.payload
//             state.user = action.payload
//         },
//         login:(state, action) => {
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.password = action.payload.password;
//             state.passwordConfirmation = action.payload.passwordConfirmation;
//             // state.value = action.payload
//         }
//     },
//     extraReducers: {
//         [signupUser.fulfilled]: (state, { payload: { error, message } }) => {
//             state.loading = false
//             if (error) {
//                 state.error = error
//             } else {
//                 state.error = message
//             }
//         },
//         [signupUser.pending]: (state, action) => {
//             state.loading = true
//         },
//         // [signinUser.pending]: (state, action) => {
//         //     state.loading = true
//         // },
//         // [signinUser.fulfilled]: (state, { payload: { error, token } }) => {
//         //     state.loading = false
//         //     if (error) {
//         //         state.error = error
//         //     } else {
//         //         state.token = token
//         //         localStorage.setItem('token', token)
//         //     }
//         // },
//     }
// });


// export const {login, signup} = userSlice.actions
// export default userSlice.reducer;
