import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isInitialized: true,
    status: "idle",
    filter: null,
    terms: null
};

export const searchSlice = createSlice( {
    name: "search",
    initialState,
    reducers: {
        resetFilter: ( state ) => {
            state.filter = null;
        },
        setFilter: ( state, action ) => {
            state.filter = action.payload;
        },
        resetTerms: ( state ) => {
            state.terms = null;
        },
        setTerms: ( state, action ) => {
            state.terms = action.payload;
        }
    }
} );

export const {
    resetFilter,
    setFilter,
    resetTerms,
    setTerms
} = searchSlice.actions;

// Select a items from the state.
export const selectSearch = ( state ) => state.search;

export default searchSlice.reducer;
