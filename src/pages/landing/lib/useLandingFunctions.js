import { useNavigate } from "react-router-dom";
import { useAppPaths } from "AppPaths";

export function useLandingFunctions() {
    const navigate = useNavigate();
    const { authPaths, dashboardPaths } = useAppPaths();

    const navigateToLogout = ( e ) => {
        e.preventDefault();
        navigate( authPaths.makeAbsolute( authPaths.logout ) );
    }

    function navigateToDashboard( e ) {
        e.preventDefault();
        navigate( dashboardPaths.makeAbsolute( dashboardPaths.root + "/" + dashboardPaths.data.root ) );
    }

    return ( {
        navigateToLogout,
        navigateToDashboard
    } );
}