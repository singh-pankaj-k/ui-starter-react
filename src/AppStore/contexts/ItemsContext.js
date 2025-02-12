import PropTypes from "prop-types";
import { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectItems,
    getItemsAsync,
    resetReqResponse
} from "../store/reducers/itemsReducers";
import { flatItemsData } from "../utils";


const ItemsContext = createContext( null );

export const ItemsProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const itemsState = useSelector( selectItems );

    const getItemsFromAPI = useCallback( async ( searchObject ) => dispatch( getItemsAsync( {
        searchObject
    } ) ), [ dispatch ] );

    const resetItemReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );

    return (
        <ItemsContext.Provider
            value={ {
                ...itemsState,
                ...flatItemsData( itemsState ),
                getItemsFromAPI,
                resetItemReqResponse
            } }
        >
            { children }
        </ItemsContext.Provider>
    );
};

ItemsProvider.propTypes = {
    children: PropTypes.node
};

export default ItemsContext;
