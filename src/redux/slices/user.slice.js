import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit/src/createAsyncThunk";
import {usersService} from "../../services";

const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const getUsers = createAsyncThunk(
    'userSlice/getUsers', //2 params: 1st sliceName/function, 2nd - async callback
    async (_, {rejectWithValue}) => { //async cb has 2 params, 1st - what we
        try {
            const {data} = await usersService.getUsers();
            return data; //result of this request will be obroblenyi by the extraReducer
        }
        catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

createAsyncThunk(
    'userSlice/getUserByID',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await usersService.getUserByID(id);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getUsers: (state, action) => {
        //     state.users = action.payload
        // },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    // extraReducers: {
    //     [getUsers.fulfilled]: (state, action) => {
    //         state.users = action.payload;
    //     }
    // },
    extraReducers: builder =>
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
});

const {reducer: userReducer, actions: {setCurrentUser}} = userSlice;

const userActions = {
    getUsers,
    setCurrentUser
}

export {
    userReducer,
    userActions
}
