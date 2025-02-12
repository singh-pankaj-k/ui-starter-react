import PropTypes from "prop-types";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

// material-ui
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

// ==============================|| Loader ||============================== //

const LoaderWrapper = styled( "div" )( ( { theme } ) => ( {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2001,
    width: "100%",
    "& > * + *": {
        marginTop: theme.spacing( 2 )
    }
} ) );

const Loader = () => (
    <LoaderWrapper>
        <LinearProgress color="primary"/>
    </LoaderWrapper>
);

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

CommonLayout.propTypes = {
    layout: PropTypes.string
};

