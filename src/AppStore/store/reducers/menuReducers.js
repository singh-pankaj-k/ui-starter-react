// third-party
import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = {
    selectedID: null,
    drawerOpen: false,
    error: null
};

// ==============================|| SLICE - MENU ||============================== //


const menuSlice = createSlice( {
    name: "menu",
    initialState,
    reducers: {
        activeID( state, action ) {
            state.selectedID = action.payload;
        },
        openDrawer( state, action ) {
            state.drawerOpen = action.payload.drawerOpen;
        },
        hasError( state, action ) {
            state.error = action.payload;
        }
    }
} );

export default menuSlice.reducer;

export const {
    activeID,
    openDrawer,
    hasError
} = menuSlice.actions;
