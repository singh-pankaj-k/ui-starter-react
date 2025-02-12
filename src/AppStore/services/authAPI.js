import {
    createGetRequest,
    createPatchRequest,
    createPostRequest,
    getSchemeDomainPort,
    performRequest
} from "./requests";

/*********
 * PATHS *
 *********/
// Auth api routes
const commonPartAuth = "/api/v1/auth";
const localAuthApiPort = "30000";
const loginPath = commonPartAuth + "/login";
const registerPath = commonPartAuth + "/register";
const recoverPath = commonPartAuth + "/recover";
const changePassPath = commonPartAuth + "/change-password";
const isEmailExistPath = commonPartAuth + "/exist/email";


const url = {
    auLoginAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + loginPath ),
    auRegisterAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + registerPath ),
    auRecoverAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + recoverPath ),
    auChangePassAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + changePassPath ),
    auIsEmailExistAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + isEmailExistPath ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function isEmailAlreadyInRecord( reqObject = {} ) {
    return performRequest( createGetRequest( reqObject, createIsEmailExistUrl( reqObject ) ) );
}

export function loginRequest( reqObject = {} ) {

    if ( isValidLoginUser( reqObject ) ) {
        return performRequest( createPostRequest( formatBodyInput( reqObject ), url.auLoginAPI() ) );
    } else {
        return new Promise( resolve => resolve( { data: "login_input_error" } ) );
    }
}

export function registerRequest( reqObject = {} ) {

    if ( isValidRegisterUser( reqObject ) ) {
        return performRequest( createPostRequest( formatBodyInput( reqObject ), url.auRegisterAPI() ) );
    } else {
        return new Promise( resolve => resolve( { data: "register_input_error" } ) );
    }
}

export function forgotPasswordRequest( reqObject = {} ) {

    if ( isValidForgotPasswordEmail( reqObject ) ) {
        return performRequest( createPostRequest( formatBodyInput( reqObject ), url.auRecoverAPI() ) );
    } else {
        return new Promise( resolve => resolve( { data: "email_input_error" } ) );
    }
}

export function changePasswordRequest( reqObject = {} ) {

    if ( isValidChangePasswordUser( reqObject ) ) {
        return performRequest( createPatchRequest( formatBodyInput( reqObject ), url.auChangePassAPI() ) );
    } else {
        return new Promise( resolve => resolve( { data: "change_password_input_error" } ) );
    }
}


/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
function createIsEmailExistUrl( reqObject ) {
    return url.auIsEmailExistAPI() + ( reqObject?.email ? "?email=" + reqObject?.email : "");
}

function formatBodyInput( reqObject ) {
    return ( { body: { user: reqObject } } );
}

function isValidLoginUser( loginObject ) {
    return ( loginObject?.email?.length > 0 ) && ( loginObject?.password?.length > 0 );
}

function isValidRegisterUser( loginObject ) {
    return ( ( loginObject?.email?.length > 0 ) &&
        ( loginObject?.password?.length > 0 ) &&
        ( loginObject?.first_name?.length > 0 ) );
}

function isValidForgotPasswordEmail( forgotPasswordObject ) {
    return ( forgotPasswordObject?.email?.length > 0 );
}

function isValidChangePasswordUser( changePasswordObject ) {
    return ( ( changePasswordObject?.email?.length > 0 ) &&
        ( changePasswordObject?.password?.length > 0 ) &&
        ( changePasswordObject?.new_password?.length > 0 ) );
}
