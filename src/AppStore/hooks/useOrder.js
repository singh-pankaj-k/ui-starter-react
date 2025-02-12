import { useContext } from 'react';

// auth provider
import OrderContext from '../contexts/OrderContext';

const useOrder = () => {
    const context = useContext( OrderContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useOrder;
