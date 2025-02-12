import { useContext } from 'react';

// auth provider
import CartContext from '../contexts/CartContext';

const useCart = () => {
    const context = useContext( CartContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useCart;
