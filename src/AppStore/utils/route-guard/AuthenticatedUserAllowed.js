// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import { useAuth } from 'AppStore';

// ==============================|| AUTH GUARD ||============================== //

/**
 * Guest users go to login page.
 * @param children
 * @param goTo
 * @returns {*}
 * @constructor
 */
export const AuthenticatedUserAllowed = ( { children, goTo } ) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect( () => {
        if ( !isLoggedIn ) {
            navigate( ( goTo || "/login" ), {
                state: {
                    from: location.pathname
                },
                replace: true
            } );
        }
    }, [ isLoggedIn, navigate, location, goTo ] );

    return children;
};
