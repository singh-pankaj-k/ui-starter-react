import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    ORDER_NEW_CREATE
} from "./actions";

import {
    createNewOrder
} from "../../services";


const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
};

export const createOrderAsync = createAsyncThunk(
    ORDER_NEW_CREATE,
    async ( { reqObject } ) => {
        const response = await createNewOrder( reqObject );
        return response.data;
    }
);

export const orderSlice = createSlice( {
    name: "order",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( createOrderAsync.pending, ( state ) => {
                state.status = "loading";
            } )
            .addCase( createOrderAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse
} = orderSlice.actions;

// Select a items from the state.
export const selectOrder = ( state ) => state.order;

export default orderSlice.reducer;
