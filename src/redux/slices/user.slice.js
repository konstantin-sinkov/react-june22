import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
});

const {reducer: userReducer, actions: {getUsers, setCurrentUser}} = userSlice;

const userActions = {
    getUsers,
    setCurrentUser
}

export {
    userReducer,
    userActions
}
