import { lazy } from "react";

// project import
import { Loadable } from "components";
import { AuthenticatedUserAllowed } from "AppStore";
import { CommonLayout } from "layout";

// render - landing page
const LandingPage = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.LandingPage } ) ) ) );
const DashboardLayout = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.DashboardLayout } ) ) ) );
const DashboardHome = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.DashboardHome } ) ) ) );
const SettingsHome = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.SettingsHome } ) ) ) );
const ProfileHome = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.ProfileHome } ) ) ) );


export const dashboardRoutes = ( dashboardPaths ) => ( {
    path: dashboardPaths.root,
    element: (
        <AuthenticatedUserAllowed>
            <CommonLayout/>
        </AuthenticatedUserAllowed>
    ),
    children: [
        {
            path: dashboardPaths.data.root,
            element: <DashboardLayout/>,
            children: [
                {
                    index: true,
                    element: <DashboardHome/>
                }
            ]
        },
        {
            path: dashboardPaths.profile.root,
            element: <DashboardLayout/>,
            children: [
                {
                    index: true,
                    element: <ProfileHome/>
                }
            ]
        },
        {
            path: dashboardPaths.settings.root,
            element: <DashboardLayout/>,
            children: [
                {
                    index: true,
                    element: <SettingsHome/>
                }
            ]
        },
        {
            index: true,
            element: <LandingPage/>
        },
    ]
} );