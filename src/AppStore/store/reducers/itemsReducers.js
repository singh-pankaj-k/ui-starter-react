import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_ITEMS } from "./actions";
import { getItemsRequest } from "../../services";

const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
};

export const getItemsAsync = createAsyncThunk(
    GET_ITEMS,
    async ( { searchObject } ) => {
        const response = await getItemsRequest( searchObject );
        return response.data;
    }
);

export const itemsSlice = createSlice( {
    name: "items",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getItemsAsync.pending, ( state ) => {
                state.status = "loading";
                state.reqResponse = null;
            } )
            .addCase( getItemsAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse
} = itemsSlice.actions;

// Select a items from the state.
export const selectItems = ( state ) => state.items;

export default itemsSlice.reducer;
