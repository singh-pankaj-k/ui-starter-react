import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import 'App/App.css';
import { ScrollTop } from "../components";
import Routes from "routes";
// import { useTheme } from '@mui/material/styles';
// import { useAuth, useConfig, useUrl } from "AppStore";


function App() {
    // const config = useConfig();
    // const url = useUrl();
    // const theme = useTheme();
    // const { jwt, isLoggedIn } = useAuth();
    //
    // console.log( jwt );
    // console.log( isLoggedIn );
    // console.log( config );
    // console.log( url.url.imageAPI() );
    // console.log( theme );

    return (
        <BrowserRouter>
            <ScrollTop>
                <CssBaseline enableColorScheme/>
                <Routes/>
            </ScrollTop>
        </BrowserRouter>
    );
}

export default App;
