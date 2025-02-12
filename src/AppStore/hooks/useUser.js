import { useContext } from 'react';

// auth provider
import UserContext from '../contexts/UserContext';


const useUser = () => {
    const context = useContext( UserContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useUser;
