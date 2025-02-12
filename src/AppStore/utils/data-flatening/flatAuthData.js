export const flatAuthData = authState => {
    return {
        displayName: extractUserDisplayName( authState ),
        userEmail: getUserEmail( authState ),
        jwt: getUserJwt( authState ),
        isTokenVerified: verifyToken( authState ),
        resMessage: extractResponseMessage( authState ),
        changePasswordResMessage: extractChangePasswordResponseMessage( authState ),
        isEmailExist: extractEmailInRecord( authState ),
        userRoles: getUserRoles( authState ),
    };
};

function extractUserDisplayName( authState ) {
    return authState?.user?.name;
}

const getUserEmail = authState => authState?.user?.email;

const getUserJwt = authState => authState?.user?.jwt;

function verifyToken( authState ) {
    return !!authState?.user?.jwt;
}

function extractResponseMessage( authState ) {
    return authState?.reqResponse?.message;
}

function extractChangePasswordResponseMessage( authState ) {
    return authState?.changePasswordRes?.message;
}

function extractEmailInRecord( authState ) {
    return !!( authState?.isEmailExistResponse?.email_exist );
}

function getUserRoles( authState ) {
    return [ ...authState?.user?.roles || [] ];
}