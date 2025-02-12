import { lazy } from "react";

// project import
import { Loadable } from "components";
import { CommonLayout } from "layout";

const NotFoundPage = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.NotFoundPage } ) ) ) );
const MaintenanceError500 = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.MaintenanceError500 } ) ) ) );
const MaintenanceUnderConstruction = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.MaintenanceUnderConstruction } ) ) ) );


const PublicFallbackRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: (
                <CommonLayout/>
            ),
            children: [
                {
                    path: "404",
                    element: <NotFoundPage/>
                },
                {
                    path: "500",
                    element: <MaintenanceError500/>
                },
                {
                    path: "under-construction",
                    element: <MaintenanceUnderConstruction/>
                },
                // {
                //     path: "coming-soon",
                //     element: <MaintenanceComingSoon/>
                // },
                {
                    path: "*",
                    element: <NotFoundPage/>
                }
            ]
        }
    ]
};

export default PublicFallbackRoutes;
