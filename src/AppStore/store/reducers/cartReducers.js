import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    CART_ADD_ITEM,
    CART_FETCH_BY_VISITOR_TOKEN,
    CART_EMPTY_BY_VISITOR_TOKEN,
    CART_UPDATE_ITEM_COUNT,
    CART_DELETE_ITEM
} from "./actions";

import {
    fetchCartByVisitorToken,
    addItemToCartByVisitorToken,
    emptyCartByVisitorToken,
    updateNumberOfItemsByVisitorToken,
    deleteItemByVisitorToken
} from "../../services";


const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
};

export const deleteItemAsync = createAsyncThunk(
    CART_DELETE_ITEM,
    async ( { reqObject } ) => {
        const response = await deleteItemByVisitorToken( reqObject );
        return response.data;
    }
);

export const updateItemCountAsync = createAsyncThunk(
    CART_UPDATE_ITEM_COUNT,
    async ( { reqObject } ) => {
        const response = await updateNumberOfItemsByVisitorToken( reqObject );
        return response.data;
    }
);

export const fetchCartByVisitorTokenAsync = createAsyncThunk(
    CART_FETCH_BY_VISITOR_TOKEN,
    async ( { reqObject } ) => {
        const response = await fetchCartByVisitorToken( reqObject );
        return response.data;
    }
);

export const emptyCartByVisitorTokenAsync = createAsyncThunk(
    CART_EMPTY_BY_VISITOR_TOKEN,
    async ( { reqObject } ) => {
        const response = await emptyCartByVisitorToken( reqObject );
        return response.data;
    }
);

export const addItemToCartAsync = createAsyncThunk(
    CART_ADD_ITEM,
    async ( { reqObject } ) => {
        const response = await addItemToCartByVisitorToken( reqObject );
        return response.data;
    }
);

export const cartSlice = createSlice( {
    name: "cart",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( fetchCartByVisitorTokenAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( fetchCartByVisitorTokenAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } )
            .addCase( addItemToCartAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( addItemToCartAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } )
            .addCase( emptyCartByVisitorTokenAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( emptyCartByVisitorTokenAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } )
            .addCase( updateItemCountAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( updateItemCountAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } )
            .addCase( deleteItemAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( deleteItemAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse
} = cartSlice.actions;

// Select a items from the state.
export const selectCart = ( state ) => state.cart;

export default cartSlice.reducer;
