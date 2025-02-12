export const flatOrdersData = orderState => {
    return {
        ordersList: _extractOrdersItems( orderState ),
    };
};

function _extractOrdersItems( orderState ) {
    return orderState?.reqResponse?.data?.orders;
}
