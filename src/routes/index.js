import { useRoutes } from "react-router-dom";

// project import
import { otherRoutes } from "./otherRoutes";
import publicFallbackRoutes from "./publicFallbackRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { dashboardRoutes } from "./dashboardRoutes";
import { useAppPaths } from "../AppPaths";


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const { authPaths, dashboardPaths } = useAppPaths();

    return useRoutes( [
        AuthRoutes( authPaths ),
        otherRoutes,
        dashboardRoutes( dashboardPaths ),
        publicFallbackRoutes
    ] );
}
