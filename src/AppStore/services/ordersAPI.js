import { createGetRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// Orders api
const commonPartOrders = "/api/v1/orders/customer/status";
const localOrdersPort = "37000";

const url = {
    ordersAPI: () => ( getSchemeDomainPort( localOrdersPort ) + commonPartOrders ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function getOrdersOrders( reqObject ) {
    return performRequest( createGetRequest( reqObject, _createFullUrl( reqObject, url.ordersAPI() ) ) );
}


/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
function _createFullUrl( reqObject, url ) {
    return url + _createQueryString( reqObject );
}

function _createQueryString( reqObject ) {
    const params = reqObject?.qsObject;
    return (
        "?period=" + ( params?.get( 'period' ) ? params?.get( 'period' ) : '6+months' ) +
        "&from=" + ( params?.get( 'from' ) ? params?.get( 'from' ) : '0' ) +
        "&number=" + ( params?.get( 'number' ) ? params?.get( 'number' ) : '50' )
    );
}
