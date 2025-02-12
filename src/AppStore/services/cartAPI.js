import {
    createDeleteRequest,
    createPatchRequest,
    createPostRequest,
    getSchemeDomainPort,
    performRequest
} from "./requests";

/*********
 * PATHS *
 *********/
// Cart api
const commonPartCart = "/api/v1/cart";
const localCartPort = "36000";
const guestCartPath = commonPartCart + "/guest";
const addItemCartPath = commonPartCart + "/items/guest";
const emptyCartPath = addItemCartPath + "/empty";

const url = {
    cartGetAPI: () => ( getSchemeDomainPort( localCartPort ) + guestCartPath ),
    cartAddItemAPI: () => ( getSchemeDomainPort( localCartPort ) + addItemCartPath ),
    cartEmptyAPI: () => ( getSchemeDomainPort( localCartPort ) + emptyCartPath ),
};

/*********************
 * SPECIFIC REQUESTS *
 *********************/
export function fetchCartByVisitorToken( reqObject ) {
    return performRequest( createPostRequest( reqObject, url.cartGetAPI() ) );
}

export function addItemToCartByVisitorToken( reqObject ) {
    reqObject = { ...reqObject, body: _createPostBody( reqObject ) };
    return performRequest( createPostRequest( reqObject, url.cartAddItemAPI() ) );
}

export function emptyCartByVisitorToken( reqObject ) {
    reqObject = { ...reqObject, body: {} };
    return performRequest( createDeleteRequest( reqObject, url.cartEmptyAPI() ) );
}

export function updateNumberOfItemsByVisitorToken( reqObject ) {
    reqObject = { ...reqObject, body: _createItemPatchBody( reqObject ) };
    return performRequest( createPatchRequest( reqObject, url.cartAddItemAPI() ) );
}

export function deleteItemByVisitorToken( reqObject ) {
    reqObject = { ...reqObject, body: _createItemDeleteBody( reqObject ) };
    return performRequest( createDeleteRequest( reqObject, url.cartAddItemAPI() ) );
}

/********************************
 * PRIVATE FUNCTIONS BELOW HERE *
 ********************************/
function _createItemPatchBody( reqObject ) {
    const item = reqObject?.item;
    return ( {
        item: {
            ...item,
            number_of_items: reqObject?.new_count,
        }
    } );
}

function _createItemDeleteBody( reqObject ) {
    const item = reqObject?.item;
    return ( { item } );
}

function _createPostBody( reqObject ) {
    const item = reqObject?.item;
    return ( {
        item: _itemDetails( item )
    } );
}

function _itemDetails( item ) {
    return ( {
        title: item?.title,
        item_id: item?.item_id,
        coupon: "none",
        image_url: item?.image_urls[ 0 ],
        number_of_items: 1,
    } );
}
