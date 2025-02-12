import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    ORDERS_NEW_CREATE
} from "./actions";

import {
    getOrdersOrders
} from "../../services";


const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
    reloadOrdersNow: true
};

export const getOrdersAsync = createAsyncThunk(
    ORDERS_NEW_CREATE,
    async ( { reqObject } ) => {
        const response = await getOrdersOrders( reqObject );
        return response.data;
    }
);

export const ordersSlice = createSlice( {
    name: "orders",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        },
        reloadOrdersNow: ( state ) => {
            state.reloadOrdersNow = true;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getOrdersAsync.pending, ( state ) => {
                state.reloadOrdersNow = false;
                state.status = "loading";
            } )
            .addCase( getOrdersAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse,
    reloadOrdersNow,
} = ordersSlice.actions;

// Select a items from the state.
export const selectOrders = ( state ) => state.orders;

export default ordersSlice.reducer;
