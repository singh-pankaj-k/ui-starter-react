import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { Loader } from "components";


const AppMainContainer = styled( "div" )( ( { theme } ) => ( {
    top: 0,
    left: 0,
    minHeight: "100vh",
    width: "100%",
    backgroundColor: theme.palette.background.default,
} ) );

// ==============================|| MINIMAL LAYOUT ||============================== //

export const CommonLayout = () => {

    return (
        <AppMainContainer>
            <Suspense fallback={ <Loader/> }>
                <Outlet/>
            </Suspense>
        </AppMainContainer>
    );
};


