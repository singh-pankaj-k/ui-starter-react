import React, { createContext, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import {
    selectUser,
    setShippingAddress,
    resetReqResponse,
    resetAddress,
    resetAddresses,
    saveAddressAsync,
    getAddressesAsync,
    getProfileAsync
} from "../store/reducers/userReducers";
import { flatUserData } from "../utils";
import { useAuth } from "../hooks";


const UserContext = createContext( null );

export const UserProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const userState = useSelector( selectUser );

    const { jwt, isLoggedIn } = useAuth();

    const resetUserReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );
    const resetUserAddress = useCallback( () => dispatch( resetAddress() ), [ dispatch ] );
    const resetUserAddresses = useCallback( () => dispatch( resetAddresses() ), [ dispatch ] );
    const setUserShippingAddress = useCallback( ( address ) => dispatch( setShippingAddress( address ) ), [ dispatch ] );

    const saveUserAddress = useCallback( async ( reqObj ) => dispatch( saveAddressAsync( {
        reqObj
    } ) ), [ dispatch ] )

    const getUserAddresses = useCallback( async ( reqObj ) => dispatch( getAddressesAsync( {
        reqObj
    } ) ), [ dispatch ] )

    const getUserProfile = useCallback( async ( reqObj ) => dispatch( getProfileAsync( {
        reqObj
    } ) ), [ dispatch ] )

    React.useEffect( () => {
        if ( isLoggedIn ) {
            getUserAddresses( { jwt } ).then();
        }
    }, [ getUserAddresses, isLoggedIn, jwt ] );

    React.useEffect( () => {
        if ( isLoggedIn ) {
            getUserProfile( { jwt } ).then();
        }
    }, [ getUserProfile, isLoggedIn, jwt ] );

    return (
        <UserContext.Provider
            value={ {
                ...userState,
                ...flatUserData( userState ),
                resetUserReqResponse,
                resetUserAddress,
                resetUserAddresses,
                saveUserAddress,
                getUserAddresses,
                setUserShippingAddress
            } }
        >
            { children }
        </UserContext.Provider>
    );
};


UserProvider.propTypes = {
    children: PropTypes.node
};


export default UserContext;
