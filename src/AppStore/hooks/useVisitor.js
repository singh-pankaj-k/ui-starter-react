import { useContext } from 'react';

// auth provider
import VisitorContext from '../contexts/VisitorContext';


const useVisitor = () => {
    const context = useContext( VisitorContext );

    if ( !context ) throw new Error( 'context must be use inside provider' );

    return context;
};

export default useVisitor;
