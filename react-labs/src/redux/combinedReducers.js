import { combineReducers } from "redux";
import { cartReducers } from "./reducers";

export const reducers = combineReducers({
    cartItems: cartReducers,
});