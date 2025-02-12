import PropTypes from "prop-types";
import { createContext, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    loginAsync,
    registerAsync,
    forgotAsync,
    changePasswordAsync,
    isEmailInRecordAsync,
    logout,
    selectAuth,
    setLoginTrue,
    setKeepLoggedIn,
    setUser,
    setAuthAlert,
    resetChangePasswordRes
} from "../store/reducers/authReducers";
import { flatAuthData } from "../utils";
import { Loader } from "../components";
import { useLocalStorage } from "../hooks";


const AuthContext = createContext( null );

export const AuthProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const authState = useSelector( selectAuth );
    const [ storedUser, setStoredUser ] = useLocalStorage( "stored-user", authState?.user );

    const setUserIsLoginTrue = useCallback( () => dispatch( setLoginTrue() ), [ dispatch ] );
    const setUserAuthAlert = useCallback( alertObj => dispatch( setAuthAlert( alertObj ) ), [ dispatch ] );
    const setKeepUserLoggedIn = useCallback( checked => dispatch( setKeepLoggedIn( checked ) ), [ dispatch ] );
    const setAuthUser = useCallback( storedUser => dispatch( setUser( storedUser ) ), [ dispatch ] );
    const setChangePasswordResToNull = useCallback( () => dispatch( resetChangePasswordRes() ), [ dispatch ] );

    const loginUser = useCallback( async ( userLoginObj ) => dispatch( loginAsync( {
        userLoginObj
    } ) ), [ dispatch ] );

    const logoutUser = useCallback( () => {
        setStoredUser( {} );
        dispatch( logout() );
    }, [ dispatch, setStoredUser ] );

    const saveUserInLocalStore = useCallback( ( authState ) => {
        if ( authState?.keepLoggedIn ) {
            setStoredUser( authState?.user );
        }
    }, [ setStoredUser ] );

    const registerUser = useCallback( async ( registerObject ) => dispatch( registerAsync( {
        registerObject
    } ) ), [ dispatch ] );

    const forgotUserPassword = useCallback( async ( passwordForgotObject ) => dispatch( forgotAsync( {
        passwordForgotObject
    } ) ), [ dispatch ] );

    const changeUserPassword = useCallback( async ( changePasswordObject ) => dispatch( changePasswordAsync( {
        changePasswordObject
    } ) ), [ dispatch ] );

    const isEmailAlreadyInRecord = useCallback( async ( reqObj ) => dispatch( isEmailInRecordAsync( {
        reqObj
    } ) ), [ dispatch ] );

    function verifyToken( authState ) {
        const { isTokenVerified } = flatAuthData( authState );
        return isTokenVerified;
    }

    // Login user and save in local storage
    useEffect( () => {
        try {
            if ( verifyToken( authState ) ) {
                setUserIsLoginTrue();
                saveUserInLocalStore( authState );
                setUserAuthAlert( "loginSuccess" );
            }
        } catch ( err ) {
            logoutUser();
        }
    }, [ setUserAuthAlert, authState, logoutUser, setUserIsLoginTrue, saveUserInLocalStore ] );

    // Load user from local storage and put in state
    useEffect( () => {
        if ( verifyToken( { user: storedUser } ) ) {
            setAuthUser( storedUser );
        }
    }, [ setAuthUser, storedUser ] );

    if ( authState.isInitialized !== undefined && !authState.isInitialized ) {
        return <Loader/>;
    }

    return (
        <AuthContext.Provider
            value={ {
                ...authState,
                ...flatAuthData( authState ),
                loginUser,
                registerUser,
                forgotUserPassword,
                changeUserPassword,
                logoutUser,
                setKeepUserLoggedIn,
                setUserAuthAlert,
                isEmailAlreadyInRecord,
                setChangePasswordResToNull
            } }
        >
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthContext;
