import * as React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "AppStore";
import { useAppPaths } from "AppPaths";


export function useAuthFunctions() {
    let navigate = useNavigate();
    const { authPaths } = useAppPaths();
    const { registerUser, loginUser, setKeepUserLoggedIn, forgotUserPassword } = useAuth();
    const [ emailError, setEmailError ] = React.useState( false );
    const [ emailErrorMessage, setEmailErrorMessage ] = React.useState( '' );
    const [ passwordError, setPasswordError ] = React.useState( false );
    const [ passwordErrorMessage, setPasswordErrorMessage ] = React.useState( '' );
    const [ open, setOpen ] = React.useState( false );
    const [ openRecoveryConfirmation, setOpenRecoveryConfirmation ] = React.useState( false );
    const [ nameError, setNameError ] = React.useState( false );
    const [ nameErrorMessage, setNameErrorMessage ] = React.useState( '' );
    const [ remember, setRemember ] = React.useState( false );
    const [ agreeError, setAgreeError ] = React.useState( false );
    const [ agreeErrorMessage, setAgreeErrorMessage ] = React.useState( '' );
    const [ forgotEmailError, setForgotEmailError ] = React.useState( false );
    const [ emailForgotErrorMessage, setEmailForgotErrorMessage ] = React.useState( '' );


    const handleClickOpen = () => {
        setOpen( true );
    };

    const handleClose = () => {
        setOpen( false );
    };

    const handleClickConfirmationOpen = () => {
        setOpenRecoveryConfirmation( true );
    };

    const handleConfirmationClose = () => {
        setOpenRecoveryConfirmation( false );
    };

    const validateSignInInputs = () => {
        const email = document.getElementById( 'email' );
        const password = document.getElementById( 'password' );

        let isValid = true;

        if ( !email.value || !/\S+@\S+\.\S+/.test( email.value ) ) {
            setEmailError( true );
            setEmailErrorMessage( 'Please enter a valid email address.' );
            isValid = false;
        } else {
            setEmailError( false );
            setEmailErrorMessage( '' );
        }

        if ( !password.value || password.value.length < 6 ) {
            setPasswordError( true );
            setPasswordErrorMessage( 'Password must be at least 6 characters long.' );
            isValid = false;
        } else {
            setPasswordError( false );
            setPasswordErrorMessage( '' );
        }

        return isValid;
    };

    const handleSignInSubmit = ( event ) => {
        event.stopPropagation();
        event.preventDefault();

        if ( emailError || passwordError ) {
            return;
        }

        const data = new FormData( event?.currentTarget );
        const formValues = {
            email: data.get( 'email' ),
            password: data.get( 'password' )
        };

        setKeepUserLoggedIn( remember );
        loginUser( {
            email: formValues?.email,
            password: formValues?.password
        } );
    };

    const validateSignUpInputs = () => {
        const email = document.getElementById( 'email' );
        const password = document.getElementById( 'password' );
        const name = document.getElementById( 'name' );
        const agreeCheckbox = document.getElementById( 'agreeToTerms' );

        let isValid = true;

        if ( !email.value || !/\S+@\S+\.\S+/.test( email.value ) ) {
            setEmailError( true );
            setEmailErrorMessage( 'Please enter a valid email address.' );
            isValid = false;
        } else {
            setEmailError( false );
            setEmailErrorMessage( '' );
        }

        if ( !password.value || password.value.length < 6 ) {
            setPasswordError( true );
            setPasswordErrorMessage( 'Password must be at least 6 characters long.' );
            isValid = false;
        } else {
            setPasswordError( false );
            setPasswordErrorMessage( '' );
        }

        if ( !name.value || name.value.length < 1 ) {
            setNameError( true );
            setNameErrorMessage( 'Name is required.' );
            isValid = false;
        } else {
            setNameError( false );
            setNameErrorMessage( '' );
        }

        if ( !agreeCheckbox?.checked ) {
            setAgreeError( true );
            setAgreeErrorMessage( 'Please accept the terms and conditions.' );
            isValid = false;
        } else {
            setAgreeError( false );
            setAgreeErrorMessage( '' );
        }

        return isValid;
    };

    const handleSignUpSubmit = ( event ) => {
        event.stopPropagation();
        event.preventDefault();

        if ( nameError || emailError || passwordError || agreeError ) {
            return;
        }

        const data = new FormData( event?.currentTarget );
        const formValues = {
            name: data.get( 'name' ),
            email: data.get( 'email' ),
            password: data.get( 'password' )
        };

        registerUser( {
            first_name: formValues?.name,
            email: formValues?.email,
            password: formValues?.password
        } );
    };

    const validateForgotPasswordInput = ( email ) => {
        let isValid = true;

        if ( !email.value || !/\S+@\S+\.\S+/.test( email.value ) ) {
            setForgotEmailError( true );
            setEmailForgotErrorMessage( 'Please enter a valid email address.' );
            isValid = false;
        } else {
            setForgotEmailError( false );
            setEmailForgotErrorMessage( '' );
        }

        return isValid;
    };

    const handleForgotPasswordSubmit = ( event ) => {
        event.stopPropagation();
        event.preventDefault();

        const email = document.getElementById( 'emailForgotPassword' );

        if ( !validateForgotPasswordInput( email ) ) {
            return;
        }

        forgotUserPassword( {
            email: email.value,
        } );
    }

    const handleNavigateToHome = ( e ) => {
        e.preventDefault();
        navigate( authPaths.makeAbsolute( '' ) );
    }

    return ( {
        open,
        emailError,
        openRecoveryConfirmation,
        emailErrorMessage,
        passwordError,
        passwordErrorMessage,
        nameError,
        nameErrorMessage,
        agreeError,
        agreeErrorMessage,
        remember,
        setRemember,
        forgotEmailError,
        emailForgotErrorMessage,
        handleClose,
        handleClickOpen,
        validateSignInInputs,
        handleSignInSubmit,
        validateSignUpInputs,
        handleSignUpSubmit,
        handleForgotPasswordSubmit,
        handleClickConfirmationOpen,
        handleConfirmationClose,
        handleNavigateToHome
    } )
}