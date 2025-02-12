import { createGetRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// Catalogue api
const commonPartCatalogue = "/api/v1/catalogue";
const localCataloguePort = "34000";
const itemPath = commonPartCatalogue + "/id-or-slug";

const url = {
    catGetAPI: () => ( getSchemeDomainPort( localCataloguePort ) + itemPath ),
};


/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function getItemRequest( searchObject ) {
    return performRequest( createGetRequest( {}, _createFullSearchUrl( searchObject, url.catGetAPI() ) ) );
}

/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
function _createFullSearchUrl( searchObject, url ) {
    return url + _createItemIdOrSlug( searchObject );
}

function _createItemIdOrSlug( searchObject ) {
    return "/" + searchObject?.id;
}