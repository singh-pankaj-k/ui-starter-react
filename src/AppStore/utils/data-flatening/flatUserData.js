export const flatUserData = userState => {
    return {
        defaultAddress: _extractDefaultAddress( userState ),
        shippingAddressId: _extractShippingAddressId( userState ),
        lastSavedAddress: _extractLastSavedAddress( userState ),
    };
};

function _extractDefaultAddress( userState ) {

    const addressesArray = userState?.addresses?.data?.addresses;

    const defaultAddress = addressesArray?.find( address => address?.default_address );

    const lastSavedAddress = userState?.address?.data?.addresses[ 0 ];

    if ( lastSavedAddress ) {
        return lastSavedAddress;
    } else if ( defaultAddress ) {
        return defaultAddress;
    } else {
        return ( addressesArray?.length > 0 ) ? addressesArray[ 0 ] : null;
    }
}

function _extractShippingAddressId( userState ) {
    return userState?.shippingAddress?.address_id;
}

function _extractLastSavedAddress( userState ) {
    return userState?.address?.data?.addresses[ 0 ];
}


