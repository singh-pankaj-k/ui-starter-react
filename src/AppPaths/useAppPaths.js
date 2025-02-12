import { useContext } from 'react';
import { AppPathsContext } from './AppPathsContext';

// ==============================|| CONFIG - HOOKS  ||============================== //

export const useAppPaths = () => useContext( AppPathsContext );

