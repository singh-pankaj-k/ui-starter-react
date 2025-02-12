import PropTypes from 'prop-types';
import { createContext } from 'react';

// project import
import { authPaths } from './authPaths';
import { dashboardPaths } from "./dashboardPaths";
import { APP_DEFAULT_PATH } from "./generalPaths";

// initial state
const initialState = {};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const AppPathsContext = createContext( initialState );

function AppPathsProvider( { children } ) {

    return (
        <AppPathsContext.Provider
            value={ {
                authPaths,
                dashboardPaths,
                APP_DEFAULT_PATH
            } }
        >
            { children }
        </AppPathsContext.Provider>
    );
}

AppPathsProvider.propTypes = {
    children: PropTypes.node
};

export { AppPathsProvider, AppPathsContext };
