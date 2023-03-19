import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import sortFormReducer from "./sortFormReducer";
import cartReducer from "./cartReducer";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({store: storeReducer, sortForm: sortFormReducer, cart: cartReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer