import { useNavigate } from "react-router-dom";

export function useDashboardFunctions() {
    const navigate = useNavigate();

    const navigateToLogout = ( e ) => {
        e.preventDefault();
        navigate( "/logout" );
    }

    return ( {
        navigateToLogout
    } );
}