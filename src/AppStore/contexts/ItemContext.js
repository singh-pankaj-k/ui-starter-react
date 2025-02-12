import PropTypes from "prop-types";
import { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    selectItem,
    getItemAsync,
    resetReqResponse
} from "../store/reducers/itemReducers";
import { flatItemData } from "../utils";


const ItemContext = createContext( null );

export const ItemProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const itemState = useSelector( selectItem );

    const getItemFromAPI = useCallback( async ( searchObject ) => dispatch( getItemAsync( {
        searchObject
    } ) ), [ dispatch ] );

    const resetItemReqResponse = useCallback( () => dispatch( resetReqResponse() ), [ dispatch ] );

    return (
        <ItemContext.Provider
            value={ {
                ...itemState,
                ...flatItemData( itemState ),
                getItemFromAPI,
                resetItemReqResponse
            } }
        >
            { children }
        </ItemContext.Provider>
    );
};

ItemProvider.propTypes = {
    children: PropTypes.node
};

export default ItemContext;
