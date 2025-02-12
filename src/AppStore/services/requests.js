/******************
 * COMMON SETTING *
 ******************/
// Common
const domainName = "https://chatpta.ca";
const localDomainName = "http://localhost";

const isProduction = !( process.env.NODE_ENV === "development" );
const getSchemeDomain = ( isProduction, domainName ) => isProduction ? domainName : localDomainName;

export const getSchemeDomainPort = ( port ) => {
    if ( port && !isProduction ) {
        return getSchemeDomain( isProduction, domainName ) + `:${ port }`;
    } else {
        return getSchemeDomain( isProduction, domainName );
    }
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/

export function createGetRequest( reqObject = {}, url ) {
    return new Request( url,
        {
            method: "GET",
            headers: createHeaders( reqObject ),
        } );
}

export function createPostRequest( reqObject = {}, url ) {
    return new Request( url,
        {
            method: "POST",
            headers: createHeaders( reqObject ),
            body: JSON.stringify( reqObject?.body )
        } );
}

export function createPatchRequest( reqObject = {}, url ) {
    return new Request( url,
        {
            method: "PATCH",
            headers: createHeaders( reqObject ),
            body: JSON.stringify( reqObject?.body )
        } );
}

export function createDeleteRequest( reqObject = {}, url ) {
    return new Request( url,
        {
            method: "DELETE",
            headers: createHeaders( reqObject ),
            body: JSON.stringify( reqObject?.body )
        } );
}

export function performRequest( request ) {
    return fetch( request )
        .then( res => handleFetchResponse( res ) )
        .then( res => ( { data: res } ) )
        .catch( () => ( { data: "fetch_error" } ) );
}

/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
export function createHeaders( reqObject ) {
    return ( {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": window.location.origin,
        'Visitor': "bearer " + reqObject?.visitorToken,
        'Authorization': "bearer " + reqObject?.jwt,
    } );
}

function handleFetchResponse( res ) {
    if ( !res.ok ) {
        return res.json();
    } else {
        return res.json();
    }
}