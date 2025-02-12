import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// project import
import { useAppPaths } from "AppPaths";
import { useAuth } from "AppStore";

// ==============================|| GUEST GUARD ||============================== //

/**
 * Authenticated users go back or go to default path.
 * @param children
 * @returns {*}
 * @constructor
 */
export const GuestUsersAllowed = ( { children } ) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { APP_DEFAULT_PATH } = useAppPaths();

    useEffect( () => {
        if ( isLoggedIn ) {
            navigate( location?.state?.from ? location?.state?.from : APP_DEFAULT_PATH, {
                state: {
                    from: ""
                },
                replace: true
            } );
        }
    }, [ isLoggedIn, navigate, location ] );

    return children;
};

