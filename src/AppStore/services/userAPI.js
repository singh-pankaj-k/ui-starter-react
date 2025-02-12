import { createGetRequest, createPostRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// User (Profile) api
const commonPartProfile = "/api/v1/profile";
const localProfilePort = "38000";
const profileAddressPath = commonPartProfile + "/address";
const profilePhonePath = commonPartProfile + "/phone";

const url = {
    prAPI: () => ( getSchemeDomainPort( localProfilePort ) + commonPartProfile ),
    prAddressAPI: () => ( getSchemeDomainPort( localProfilePort ) + profileAddressPath ),
    prPhoneAPI: () => ( getSchemeDomainPort( localProfilePort ) + profilePhonePath ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function saveUserAddress( reqObject ) {
    return performRequest( createPostRequest( reqObject, url.prAddressAPI() ) );
}

export function getUserAddresses( reqObject ) {
    return performRequest( createGetRequest( reqObject, url.prAddressAPI() ) );
}

export function getUserProfile( reqObject ) {
    return performRequest( createGetRequest( reqObject, url.prAPI() ) );
}


