import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer
});

//analogue old method createStore (is deprecated)
const setupStore = (/*використовуватиметься для типізаціїї store в TS*/) => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
