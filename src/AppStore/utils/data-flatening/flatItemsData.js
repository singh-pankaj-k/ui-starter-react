export const flatItemsData = itemsState => {
    return {
        numberOfItemsFound: _numberOfItemsFound( itemsState ),
        itemsFrom: _itemsFrom( itemsState ),
        numberOfItems: itemsInList( itemsState ),
        itemsList: _itemsList( itemsState ),
    };
};

function _numberOfItemsFound( itemsState ) {
    return itemsState?.reqResponse?.itemsFound;
}

function _itemsFrom( itemsState ) {
    return itemsState?.reqResponse?.itemsReturned?.startingFrom;
}

function itemsInList( itemsState ) {
    return itemsState?.reqResponse?.itemsReturned?.numberOfItems;
}

function _itemsList( itemsState ) {
    return itemsState?.reqResponse?.itemsList;
}