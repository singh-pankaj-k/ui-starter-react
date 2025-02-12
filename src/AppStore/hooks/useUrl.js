import { useContext } from 'react';

// auth provider
import UrlContext from '../contexts/UrlContext';


const useUrl = () => {
    const context = useContext( UrlContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useUrl;
