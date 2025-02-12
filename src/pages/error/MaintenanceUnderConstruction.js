import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function MaintenanceUnderConstruction( props ) {
    const { goToPageLink, goToPageName } = props;

    return (
        <div>
            <div style={ {
                display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center",
                minHeight: "50vh", maxWidth: "300px", margin: "auto"
            } }>
                <h1 style={ { textAlign: "center" } }>Constructing...</h1>
                <h2 style={ { textAlign: "center" } }>We are building it for you.</h2>
                <Link to={ goToPageLink ?? "/" } style={ { textDecoration: "none" } }>
                    <Button
                        variant="contained"
                        size={ "large" }
                        fullWidth
                    >
                        Go to { goToPageName ?? "Home" } page
                    </Button>
                </Link>
            </div>
        </div>
    );
}
