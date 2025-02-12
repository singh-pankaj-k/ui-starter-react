import PropTypes from "prop-types";
import React, { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectOrder,
    resetReqResponse,
    createOrderAsync
} from "../store/reducers/orderReducers";
import { flatOrderData } from "../utils";


const OrderContext = createContext( null );

export const OrderProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const orderState = useSelector( selectOrder );

    const createNewOrder = useCallback( async ( reqObject ) => dispatch( createOrderAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const resetOrderReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );

    return (
        <OrderContext.Provider
            value={ {
                ...orderState,
                ...flatOrderData( orderState ),
                createNewOrder,
                resetOrderReqResponse
            } }
        >
            { children }
        </OrderContext.Provider>
    );
};

OrderProvider.propTypes = {
    children: PropTypes.node
};

export default OrderContext;
