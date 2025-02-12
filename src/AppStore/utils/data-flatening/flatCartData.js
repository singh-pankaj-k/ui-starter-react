export const flatCartData = cartState => {
    return {
        cartItems: _extractCartItems( cartState ),
        numberOfItemsInCart: _countCartItems( cartState ),
    };
};

function _extractCartItems( cartState ) {
    return cartState?.reqResponse?.data?.cart_items;
}

function _countCartItems( cartState ) {
    return cartState?.reqResponse?.data?.cart_items?.reduce( sumItems, 0 );
}

function sumItems( count, item ) {
    return count + parseInt( item?.number_of_items );
}