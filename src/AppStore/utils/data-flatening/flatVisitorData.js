export const flatVisitorData = visitorState => {
    return {
        isVisitorTokenVerified: _isValidVisitorToken( visitorState ),
        isLoading: _isVisitorLoading( visitorState ),
        visitorToken: _extractVisitorToken( visitorState ),
        visitorId: _extractVisitorId( visitorState )
    };
};

function _isVisitorInitialized( visitorState ) {
    return visitorState?.isInitialized;
}

function _isValidVisitorToken( visitorState ) {
    return _isVisitorInitialized( visitorState ) && !!( visitorState?.reqResponse?.data?.visitor_token );
}

function _isVisitorLoading( visitorState ) {
    return _isVisitorInitialized( visitorState ) && ( visitorState?.status === "loading" );
}

function _extractVisitorToken( visitorState ) {
    return ( visitorState?.reqResponse?.data?.visitor_token );
}

function _extractVisitorId( visitorState ) {
    return ( visitorState?.reqResponse?.data?.visitor_id );
}