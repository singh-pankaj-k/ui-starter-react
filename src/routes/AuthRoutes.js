import React, { lazy } from "react";

// project import
import { GuestUsersAllowed } from "AppStore";
import { Loadable } from "components";
// import { AuthenticatedUserAllowed } from "AppStore";
import { CommonLayout } from "layout";

const SignIn = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.SignIn } ) ) ) );
const SignUp = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.SignUp } ) ) ) );
const SignInSide = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.SignInSide } ) ) ) );
const SignOut = Loadable( lazy( () => import("pages").then( IP => ( { default: IP.SignOut } ) ) ) );


export const AuthRoutes = ( authPaths ) => ( {
    path: authPaths.root,
    children: [
        {
            path: authPaths.root,
            element: (
                <GuestUsersAllowed>
                    <CommonLayout/>
                </GuestUsersAllowed>
            ),
            children: [
                {
                    path: authPaths.login,
                    element: <SignIn/>
                },
                {
                    path: authPaths.register,
                    element: <SignUp/>
                },
                {
                    path: "sign-in-side",
                    element: <SignInSide/>
                },
                // {
                //     path: authPaths.emailConfirmed,
                //     element: <ConfirmActionPage actionConfirmed={ "emailConfirmed" }/>
                // },
                // {
                //   path: "code-verification",
                //   element: <AuthCodeVerification />
                // }
            ]
        },
        // {
        //     path: authPaths.auth.root,
        //     element: (
        //         <AuthenticatedUserAllowed>
        //             <CommonLayout/>
        //         </AuthenticatedUserAllowed>
        //     ),
        //     children: [
        // {
        //     path: authPaths.auth.children.changePassword,
        //     element: <AuthChangePassword/>
        // },
        // {
        //     path: authPaths.auth.children.changeEmail,
        //     element: <ChangeEmailPage/>
        // },
        // {
        //     path: authPaths.passwordResetConfirmed,
        //     element: <ConfirmActionPage actionConfirmed={ "passwordReset" }/>
        // },
        // {
        //     path: authPaths.auth.children.changePasswordSuccess,
        //     element: <ConfirmActionPage actionConfirmed={ "passwordChanged" }/>
        // },
        // {
        //     path: authPaths.emailConfirmed,
        //     element: <ConfirmActionPage actionConfirmed={ "emailConfirmed" }/>
        // },
        // ]
        // },
        {
            path: authPaths.logout,
            element: <SignOut/>
        }
    ]
} );

