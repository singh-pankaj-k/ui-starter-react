import PropTypes from "prop-types";
import React, { createContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


import {
    resetFilter,
    setFilter,
    resetTerms,
    setTerms,
    selectSearch
} from "../store/reducers/searchReducers";
import { flatSearchData } from "../utils";


const SearchContext = createContext( null );

export const SearchProvider = ( { children } ) => {

    const dispatch = useDispatch();
    const searchState = useSelector( selectSearch );

    const resetSearchFilter = useCallback( () => dispatch( resetFilter() ), [ dispatch ] );
    const setSearchFilter = useCallback( () => dispatch( setFilter() ), [ dispatch ] );
    const resetSearchTerms = useCallback( () => dispatch( resetTerms() ), [ dispatch ] );
    const setSearchTerms = useCallback( () => dispatch( setTerms() ), [ dispatch ] );
    
    return (
        <SearchContext.Provider
            value={ {
                ...searchState,
                ...flatSearchData( searchState ),
                resetSearchFilter,
                setSearchFilter,
                resetSearchTerms,
                setSearchTerms
            } }
        >
            { children }
        </SearchContext.Provider>
    );
};

SearchProvider.propTypes = {
    children: PropTypes.node
};

export default SearchContext;
