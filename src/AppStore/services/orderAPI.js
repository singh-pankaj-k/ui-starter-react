import { createPostRequest, getSchemeDomainPort, performRequest } from "./requests";

/*********
 * PATHS *
 *********/
// Orders api
const commonPartOrders = "/api/v1/orders/customer";
const localOrdersPort = "37000";

const url = {
    ordersAPI: () => ( getSchemeDomainPort( localOrdersPort ) + commonPartOrders ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function createNewOrder( reqObject ) {
    return performRequest( createPostRequest( reqObject, url.ordersAPI() ) );
}


/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
