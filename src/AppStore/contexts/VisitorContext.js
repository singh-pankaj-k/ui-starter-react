import PropTypes from "prop-types";
import { createContext, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectVisitor,
    getVisitorAsync,
    resetReqResponse,
    setReqResponse
} from "../store/reducers/visitorReducers";
import { flatVisitorData } from "../utils";
import { useLocalStorage } from "../hooks";

const VisitorContext = createContext( null );

export const VisitorProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const visitorState = useSelector( selectVisitor );
    const [ storedVisitor, setStoredVisitor ] = useLocalStorage( "stored-visitor", visitorState?.reqResponse );

    const getVisitorFromAPI = useCallback( async ( searchObject ) => dispatch( getVisitorAsync( {
        searchObject
    } ) ), [ dispatch ] );

    const resetVisitorReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );

    const verifyVisitorToken = useCallback( visitorState => {
        return !!( visitorState?.reqResponse?.data?.visitor_token );
    }, [] );

    const storedVisitorVerified = useCallback( () => {
        return !!( storedVisitor?.data?.visitor_token );
    }, [ storedVisitor?.data?.visitor_token ] );

    const [ visitorRequested, setVisitorRequested ] = useState( false );
    // Get visitor from API
    useEffect( () => {
        if ( !storedVisitorVerified() && ( !visitorRequested ) && ( visitorState?.isInitialized ) ) {
            setVisitorRequested( true );
            getVisitorFromAPI( {} )
                .then();
        }
    }, [ visitorState, getVisitorFromAPI, storedVisitorVerified, visitorRequested ] );

    // Save visitor in local storage
    useEffect( () => {
        if ( verifyVisitorToken( visitorState ) ) {
            setStoredVisitor( visitorState?.reqResponse );
        }
    }, [ visitorState, setStoredVisitor, verifyVisitorToken ] );

    // Load visitor from local storage and put in state
    useEffect( () => {
        if ( storedVisitorVerified() ) {
            dispatch( setReqResponse( storedVisitor ) );
        }
    }, [ dispatch, storedVisitor, storedVisitorVerified ] );

    return (
        <VisitorContext.Provider
            value={ {
                ...visitorState,
                ...flatVisitorData( visitorState ),
                getVisitorFromAPI,
                resetVisitorReqResponse
            } }
        >
            { children }
        </VisitorContext.Provider>
    );
};

VisitorProvider.propTypes = {
    children: PropTypes.node
};

export default VisitorContext;
