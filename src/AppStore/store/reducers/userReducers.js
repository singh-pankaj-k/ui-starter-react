import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
    USER_SAVE_ADDRESS,
    USER_GET_ADDRESSES,
    USER_GET_PROFILE
} from "./actions";
import {
    saveUserAddress,
    getUserAddresses,
    getUserProfile
} from "../../services";

const initialState = {
    isInitialized: true,
    status: "idle",
    reqResponse: null,
    addressStatus: "idle",
    address: null,
    addressesStatus: "idle",
    addresses: null,
    shippingAddress: null,
    profileStatus: "idle",
    profile: null,
};

// Make async data request.
export const getAddressesAsync = createAsyncThunk(
    USER_GET_ADDRESSES,
    async ( { reqObj } ) => {
        const response = await getUserAddresses( reqObj );
        return response.data;
    }
);

export const getProfileAsync = createAsyncThunk(
    USER_GET_PROFILE,
    async ( { reqObj } ) => {
        const response = await getUserProfile( reqObj );
        return response.data;
    }
);

export const saveAddressAsync = createAsyncThunk(
    USER_SAVE_ADDRESS,
    async ( { reqObj } ) => {
        const response = await saveUserAddress( reqObj );
        return response.data;
    }
);

export const userSlice = createSlice( {
    name: "user",
    initialState,
    reducers: {
        resetReqResponse: ( state ) => {
            state.reqResponse = null;
        },
        resetAddress: ( state ) => {
            state.address = null;
        },
        resetAddresses: ( state ) => {
            state.addresses = null;
        },
        setShippingAddress: ( state, action ) => {
            state.shippingAddress = action.payload;
        },
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( saveAddressAsync.pending, ( state ) => {
                state.addressStatus = "loading";
                state.address = null;
            } )
            .addCase( saveAddressAsync.fulfilled, ( state, action ) => {
                state.addressStatus = "idle";
                state.address = action.payload;
            } )
            .addCase( getAddressesAsync.pending, ( state ) => {
                state.addressesStatus = "loading";
                state.addresses = null;
            } )
            .addCase( getAddressesAsync.fulfilled, ( state, action ) => {
                state.addressesStatus = "idle";
                state.addresses = action.payload;
            } )
            .addCase( getProfileAsync.pending, ( state ) => {
                state.profileStatus = "loading";
                state.profile = null;
            } )
            .addCase( getProfileAsync.fulfilled, ( state, action ) => {
                state.profileStatus = "idle";
                state.profile = action.payload;
            } );
    }
} );

export const {
    resetReqResponse,
    resetAddress,
    resetAddresses,
    setShippingAddress
} = userSlice.actions;

// Select a auth from the state.
export const selectUser = ( state ) => state.user;

export default userSlice.reducer;
