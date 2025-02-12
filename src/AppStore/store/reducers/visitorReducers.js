import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_VISITOR } from "./actions";
import { fetchVisitorRequest } from "../../services";

const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
};

export const getVisitorAsync = createAsyncThunk(
    GET_VISITOR,
    async ( { searchObject, url } ) => {
        const response = await fetchVisitorRequest( searchObject );
        return response.data;
    }
);

export const visitorSlice = createSlice( {
    name: "visitor",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        },
        setReqResponse: ( state, action ) => {
            state.reqResponse = action.payload;
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getVisitorAsync.pending, ( state ) => {
                state.status = "loading";
                state.reqResponse = null;
            } )
            .addCase( getVisitorAsync.fulfilled, ( state, action ) => {
                state.status = "idle";
                state.reqResponse = action.payload;
            } );
    }
} );

export const {
    resetReqResponse,
    setReqResponse
} = visitorSlice.actions;

// Select visitor from the state.
export const selectVisitor = ( state ) => state.visitor;

export default visitorSlice.reducer;
