import { createPostRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// Auth api routes
const commonPartAuth = "/api/v1/auth";
const localAuthApiPort = "30000";
const visitorPath = commonPartAuth + "/visitor";


const url = {
    auVisitorAPI: () => ( getSchemeDomainPort( localAuthApiPort ) + visitorPath ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function fetchVisitorRequest( reqObject = {} ) {
    return performRequest( createPostRequest( reqObject, url.auVisitorAPI() ) );
}

/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/