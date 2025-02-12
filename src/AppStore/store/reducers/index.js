// third-party
import { combineReducers } from "redux";


// project import
import auth from "./authReducers";
import visitor from "./visitorReducers";
import user from "./userReducers";
import menu from "./menuReducers";
import item from "./itemReducers";
import items from "./itemsReducers";
import cart from "./cartReducers";
import order from "./orderReducers";
import orders from "./ordersReducers";
import search from "./searchReducers";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers( {
    auth,
    visitor,
    user,
    menu,
    item,
    items,
    cart,
    order,
    orders,
    search
} );

export default reducers;
