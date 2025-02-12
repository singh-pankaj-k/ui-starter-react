import { useContext } from 'react';

// auth provider
import ItemsContext from '../contexts/ItemsContext';

// ==============================|| AUTH HOOKS ||============================== //

const useItems = () => {
    const context = useContext( ItemsContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useItems;
