import { useContext } from 'react';

// auth provider
import OrdersContext from '../contexts/OrdersContext';

const useOrders = () => {
    const context = useContext( OrdersContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useOrders;
