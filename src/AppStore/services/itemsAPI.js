import { createGetRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// Catalogue api
const commonPartCatalogue = "/api/v1/catalogue";
const localCataloguePort = "34000";
const searchPath = commonPartCatalogue + "/search";

const url = {
    catSearchAPI: () => ( getSchemeDomainPort( localCataloguePort ) + searchPath )
};


/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function getItemsRequest( searchObject ) {
    return performRequest( createGetRequest( {}, _createFullSearchUrl( searchObject, url.catSearchAPI() ) ) );
}

/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/

function _createFullSearchUrl( searchObject, url ) {
    return url + _createQueryString( searchObject );
}

function _createQueryString( searchObject ) {
    return "?c=" + searchObject.get( 'c' ) + "&cid=" + searchObject.get( 'cid' ) + "&q=" + searchObject.get( 'q' );
}