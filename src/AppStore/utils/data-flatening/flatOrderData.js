export const flatOrderData = orderState => {
    return {
        orderItems: _extractOrderItems( orderState ),
        isOrderSuccessful: _isOrderSuccessful( orderState ),
    };
};

function _extractOrderItems( orderState ) {
    return orderState?.reqResponse?.data?.order_items;
}

function _isOrderSuccessful( orderState ) {
    return orderState?.reqResponse?.status === "success";
}
