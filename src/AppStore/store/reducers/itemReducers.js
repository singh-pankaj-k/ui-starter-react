import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_ITEM } from "./actions";
import { getItemRequest } from "../../services";

const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
};

export const getItemAsync = createAsyncThunk(
    GET_ITEM,
    async ( { searchObject } ) => {
        const response = await getItemRequest( searchObject );
        return response.data;
    }
);

export const itemSlice = createSlice( {
    name: "item",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getItemAsync.pending, ( state ) => {
                state.status = "loading";
                state.reqResponse = null;
            } )
            .addCase( getItemAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse
} = itemSlice.actions;

// Select a items from the state.
export const selectItem = ( state ) => state.item;

export default itemSlice.reducer;
