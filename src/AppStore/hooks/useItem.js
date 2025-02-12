import { useContext } from 'react';

// auth provider
import ItemContext from '../contexts/ItemContext';

// ==============================|| AUTH HOOKS ||============================== //

const useItem = () => {
    const context = useContext( ItemContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useItem;
