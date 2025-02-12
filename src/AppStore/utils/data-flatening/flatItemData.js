export const flatItemData = itemState => {
    return {
        title: _extractItemTitle( itemState ),
        loadingItem: _isItemLoading( itemState ),
        itemSlug: _extractItemSlug( itemState ),
        itemId: _extractItemId( itemState ),
        item: _extractItem( itemState )
    };
};

function _extractItemTitle( itemState ) {
    return itemState?.reqResponse?.item?.title;
}

function _isItemLoading( itemState ) {
    return ( itemState?.status === "loading" );
}

function _extractItemSlug( itemState ) {
    return itemState?.reqResponse?.item?.slug;
}

function _extractItemId( itemState ) {
    return itemState?.reqResponse?.item?.item_id;
}

function _extractItem( itemState ) {
    return itemState?.reqResponse?.item;
}