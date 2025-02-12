import { lazy } from "react";

// project import
import { Loadable } from "components";

// render - landing page
const Blog = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.Blog } ) ) ) );
const Checkout = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.Checkout } ) ) ) );
const LandingPage = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.LandingPage } ) ) ) );

export const otherRoutes = {
    path: "/",
    children: [
        {
            path: "checkout",
            element: <Checkout/>
        },
        {
            path: "blog",
            element: <Blog/>
        },
        {
            index: true,
            element: <LandingPage/>
        },
    ]
};