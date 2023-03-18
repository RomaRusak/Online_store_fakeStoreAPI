import { combineReducers } from "redux";
import storeReducer from "./storeReducer";
import sortFormReducer from "./sortFormReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({store: storeReducer, sortForm: sortFormReducer, cart: cartReducer})

export default rootReducer