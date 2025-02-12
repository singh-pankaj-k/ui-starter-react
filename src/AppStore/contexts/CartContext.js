import PropTypes from "prop-types";
import React, { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectCart,
    resetReqResponse,
    addItemToCartAsync,
    fetchCartByVisitorTokenAsync,
    emptyCartByVisitorTokenAsync,
    updateItemCountAsync,
    deleteItemAsync
} from "../store/reducers/cartReducers";
import { flatCartData } from "../utils";
import { useVisitor } from "../hooks";


const CartContext = createContext( null );

export const CartProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const cartState = useSelector( selectCart );
    const { visitorToken, isVisitorTokenVerified } = useVisitor();

    const addItemToCart = useCallback( async ( reqObject ) => dispatch( addItemToCartAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const fetchCartByVisitorToken = useCallback( async ( reqObject ) => dispatch( fetchCartByVisitorTokenAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const emptyCartByVisitorToken = useCallback( async ( reqObject ) => dispatch( emptyCartByVisitorTokenAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const updateItemCount = useCallback( async ( reqObject ) => dispatch( updateItemCountAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const deleteItem = useCallback( async ( reqObject ) => dispatch( deleteItemAsync( {
        reqObject
    } ) ), [ dispatch ] );

    const resetCartReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );


    // Request cart
    React.useEffect( () => {
        if ( isVisitorTokenVerified ) {
            fetchCartByVisitorToken( { visitorToken } ).then();
        }
    }, [ visitorToken, isVisitorTokenVerified, fetchCartByVisitorToken ] );

    return (
        <CartContext.Provider
            value={ {
                ...cartState,
                ...flatCartData( cartState ),
                addItemToCart,
                fetchCartByVisitorToken,
                emptyCartByVisitorToken,
                updateItemCount,
                deleteItem,
                resetCartReqResponse
            } }
        >
            { children }
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node
};

export default CartContext;
