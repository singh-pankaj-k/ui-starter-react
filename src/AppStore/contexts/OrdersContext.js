import PropTypes from "prop-types";
import React, { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectOrders,
    resetReqResponse,
    reloadOrdersNow,
    getOrdersAsync
} from "../store/reducers/ordersReducers";
import { flatOrdersData } from "../utils";
import { useAuth } from "../hooks";
import { useVisitor } from "../hooks";


const OrdersContext = createContext( null );

export const OrdersProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const ordersState = useSelector( selectOrders );

    const { jwt, isLoggedIn } = useAuth();
    const { visitorToken } = useVisitor();

    const getOrders = useCallback( async ( reqObject ) => dispatch( getOrdersAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const resetOrdersReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );
    const reloadUserOrders = useCallback( () => dispatch( reloadOrdersNow() ), [ dispatch ] );

    React.useEffect( () => {
        if ( isLoggedIn && ordersState?.reloadOrdersNow ) {
            getOrders( { jwt, visitorToken } ).then();
        }
    }, [ ordersState, getOrders, isLoggedIn, jwt, visitorToken ] );

    return (
        <OrdersContext.Provider
            value={ {
                ...ordersState,
                ...flatOrdersData( ordersState ),
                getOrders,
                resetOrdersReqResponse,
                reloadUserOrders
            } }
        >
            { children }
        </OrdersContext.Provider>
    );
};

OrdersProvider.propTypes = {
    children: PropTypes.node
};

export default OrdersContext;
