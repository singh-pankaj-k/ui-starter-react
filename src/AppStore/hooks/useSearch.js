import { useContext } from 'react';

// auth provider
import SearchContext from '../contexts/SearchContext';

const useSearch = () => {
    const context = useContext( SearchContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useSearch;
